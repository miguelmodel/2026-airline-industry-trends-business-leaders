import { gsap } from 'gsap';
import { transitionSlides, instantSwap } from './transitions.js';
import { initAdmin } from './admin.js';

const TOTAL_SLIDES = 14;
const THEMES = ['github-cosmos', 'warm', 'corporate', 'cyberpunk'];

const LS = {
  theme: 'pres-theme',
  notes: 'pres-notes',
  hidden: 'pres-hidden-slides',
  current: 'pres-current-slide',
  showNum: 'pres-show-slide-number',
  showSection: 'pres-show-section-label'
};

const state = {
  slides: [],          // array of slide elements, index 0 => slide 1
  current: 0,          // zero-based index
  theme: 'github-cosmos',
  notesVisible: false,
  hidden: new Set(),   // zero-based indices hidden by user
  showNum: true,
  showSection: true,
  isTransitioning: false
};

const el = {};

function pad(n) { return String(n).padStart(3, '0'); }

/* ---------------- Loading ---------------- */
async function loadSlides() {
  const base = import.meta.env.BASE_URL;
  const nums = Array.from({ length: TOTAL_SLIDES }, (_, i) => i + 1);
  const parts = await Promise.all(
    nums.map(async (n) => {
      const res = await fetch(`${base}slides/slide-${pad(n)}.html`);
      if (!res.ok) throw new Error(`Failed to load slide ${n}: ${res.status}`);
      return res.text();
    })
  );

  const container = el.container;
  container.innerHTML = '';
  parts.forEach((html) => {
    const tpl = document.createElement('template');
    tpl.innerHTML = html.trim();
    const article = tpl.content.querySelector('article.slide');
    if (article) container.appendChild(article);
  });
  state.slides = Array.from(container.querySelectorAll('article.slide'));
  if (state.slides.length !== TOTAL_SLIDES) {
    console.warn(`Slide count mismatch: DOM ${state.slides.length} vs expected ${TOTAL_SLIDES}`);
  }
}

/* ---------------- Scaling ---------------- */
function fitCanvas() {
  requestAnimationFrame(() => {
    const stage = el.stage;
    const availW = stage.clientWidth;
    const availH = stage.clientHeight;
    const scale = Math.min(availW / 1920, availH / 1080);
    el.scaler.style.transform = `scale(${scale})`;
  });
}

/* ---------------- Chrome ---------------- */
function updateChrome() {
  const idx = state.current;
  const slide = state.slides[idx];
  // Counter uses the VISIBLE-slide index and total (hidden slides excluded).
  const visibleTotal = TOTAL_SLIDES - state.hidden.size;
  let visiblePos = 0;
  for (let i = 0; i <= idx && i < TOTAL_SLIDES; i++) {
    if (!state.hidden.has(i)) visiblePos++;
  }
  if (visiblePos < 1) visiblePos = 1;
  el.counter.textContent = `${visiblePos} / ${Math.max(visibleTotal, 1)}`;
  const section = (slide && slide.getAttribute('data-section')) || '';
  el.section.textContent = section;
  el.counter.classList.toggle('chrome-hidden', !state.showNum);
  el.section.classList.toggle('chrome-hidden', !state.showSection);
}

function updateNotes() {
  const slide = state.slides[state.current];
  const notesEl = slide && slide.querySelector('.speaker-notes');
  const body = el.notesBody;
  if (notesEl) {
    body.innerHTML = notesEl.innerHTML;
  } else {
    body.innerHTML = '<p>No speaker notes for this slide.</p>';
  }
  el.notesOverlay.classList.toggle('visible', state.notesVisible);
  document.body.classList.toggle('notes-visible', state.notesVisible);
  el.notesToggle.classList.toggle('is-on', state.notesVisible);
  el.notesToggle.setAttribute('aria-pressed', String(state.notesVisible));
  fitCanvas();
}

/* ---------------- Core state changers ---------------- */
function setTheme(theme) {
  if (!THEMES.includes(theme)) return;
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(LS.theme, theme);
  if (el.onThemeChange) el.onThemeChange(theme);
}

function setNotes(visible) {
  state.notesVisible = !!visible;
  localStorage.setItem(LS.notes, state.notesVisible ? '1' : '0');
  updateNotes();
  if (el.onNotesChange) el.onNotesChange(state.notesVisible);
}

function toggleNotes() { setNotes(!state.notesVisible); }

function setShowNum(v) {
  state.showNum = !!v;
  localStorage.setItem(LS.showNum, state.showNum ? '1' : '0');
  updateChrome();
}
function setShowSection(v) {
  state.showSection = !!v;
  localStorage.setItem(LS.showSection, state.showSection ? '1' : '0');
  updateChrome();
}

function persistHidden() {
  localStorage.setItem(LS.hidden, JSON.stringify(Array.from(state.hidden)));
}
function setHidden(idx, hidden) {
  if (hidden) state.hidden.add(idx);
  else state.hidden.delete(idx);
  persistHidden();
  // If the user hid the slide currently on screen, move to the nearest
  // visible slide so the deck never rests on a hidden slide.
  if (hidden && idx === state.current && state.hidden.size < TOTAL_SLIDES) {
    let t = nextVisible(state.current, 1);
    if (t === -1) t = nextVisible(state.current, -1);
    if (t !== -1) { goTo(t, { instant: true }); }
  }
  // Recompute the visible-aware counter immediately.
  updateChrome();
  if (el.onHiddenChange) el.onHiddenChange();
}

/* ---------------- Navigation ---------------- */
function nextVisible(from, dir) {
  let i = from;
  for (let step = 0; step < TOTAL_SLIDES; step++) {
    i += dir;
    if (i < 0 || i >= TOTAL_SLIDES) return -1;
    if (!state.hidden.has(i)) return i;
  }
  return -1;
}

async function goTo(idx, { instant = false, direction = null } = {}) {
  if (idx < 0 || idx >= TOTAL_SLIDES) return;
  if (state.isTransitioning) return;
  const oldIdx = state.current;
  if (idx === oldIdx && state.slides[idx].classList.contains('active')) {
    return;
  }
  const dir = direction != null ? direction : (idx > oldIdx ? 1 : -1);
  const oldEl = state.slides[oldIdx];
  const newEl = state.slides[idx];

  state.isTransitioning = true;
  state.current = idx;
  localStorage.setItem(LS.current, String(idx));

  if (instant) {
    instantSwap(oldEl === newEl ? null : oldEl, newEl);
    updateChrome();
    updateNotes();
    if (el.onSlideChange) el.onSlideChange(idx);
    state.isTransitioning = false;
    return;
  }

  updateChrome();
  updateNotes();
  if (el.onSlideChange) el.onSlideChange(idx);
  await transitionSlides(oldEl === newEl ? null : oldEl, newEl, dir);
  setTimeout(() => { state.isTransitioning = false; }, 60);
}

function goNext() {
  const t = nextVisible(state.current, 1);
  if (t !== -1) goTo(t, { direction: 1 });
}
function goPrev() {
  const t = nextVisible(state.current, -1);
  if (t !== -1) goTo(t, { direction: -1 });
}
function goHome() {
  const t = state.hidden.has(0) ? nextVisible(0, 1) : 0;
  if (t !== -1) goTo(t, { direction: -1 });
}
function goEnd() {
  const last = TOTAL_SLIDES - 1;
  const t = state.hidden.has(last) ? nextVisible(last, -1) : last;
  if (t !== -1) goTo(t, { direction: 1 });
}

/* ---------------- Fullscreen ---------------- */
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

/* ---------------- Print ---------------- */
let printSaved = [];
function preparePrint() {
  printSaved = [];
  state.slides.forEach((s, i) => {
    printSaved.push({
      el: s,
      cssText: s.style.cssText,
      active: s.classList.contains('active')
    });
    gsap.killTweensOf(s);
    s.querySelectorAll('*').forEach((c) => gsap.killTweensOf(c));
    s.style.removeProperty('opacity');
    s.style.removeProperty('visibility');
    s.style.removeProperty('transform');
    if (state.hidden.has(i)) s.classList.add('print-hidden');
    else s.classList.remove('print-hidden');
  });
}
function restorePrint() {
  printSaved.forEach(({ el: s, cssText, active }) => {
    s.style.cssText = cssText;
    s.classList.remove('print-hidden');
    s.classList.toggle('active', active);
  });
  printSaved = [];
}
function exportPDF() {
  preparePrint();
  const after = () => { restorePrint(); window.removeEventListener('afterprint', after); };
  window.addEventListener('afterprint', after);
  window.print();
}

/* ---------------- Edge reveal for arrows ---------------- */
function setupEdgeReveal() {
  window.addEventListener('mousemove', (e) => {
    const w = window.innerWidth;
    el.navPrev.classList.toggle('edge-reveal', e.clientX < w * 0.12);
    el.navNext.classList.toggle('edge-reveal', e.clientX > w * 0.88);
  });
}

/* ---------------- Input ---------------- */
function setupKeys() {
  window.addEventListener('keydown', (e) => {
    if (el.adminOpen && el.adminOpen()) {
      if (e.key === 'Escape') { e.preventDefault(); el.closeAdmin(); }
      return;
    }
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    switch (e.key) {
      case 'ArrowRight': case 'ArrowDown': case 'PageDown': case ' ':
        e.preventDefault(); goNext(); break;
      case 'ArrowLeft': case 'ArrowUp': case 'PageUp':
        e.preventDefault(); goPrev(); break;
      case 'Home': e.preventDefault(); goHome(); break;
      case 'End': e.preventDefault(); goEnd(); break;
      case 'f': case 'F': e.preventDefault(); toggleFullscreen(); break;
      case 'n': case 'N': e.preventDefault(); toggleNotes(); break;
      case 'a': case 'A': e.preventDefault(); el.openAdmin(); break;
      default: break;
    }
  });
}

function setupTouch() {
  let x0 = null, y0 = null;
  el.stage.addEventListener('touchstart', (e) => {
    x0 = e.changedTouches[0].clientX;
    y0 = e.changedTouches[0].clientY;
  }, { passive: true });
  el.stage.addEventListener('touchend', (e) => {
    if (x0 == null) return;
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) goNext(); else goPrev();
    }
    x0 = y0 = null;
  }, { passive: true });
}

/* ---------------- Restore persisted state ---------------- */
function restoreState() {
  const t = localStorage.getItem(LS.theme);
  state.theme = THEMES.includes(t) ? t : 'github-cosmos';

  state.notesVisible = localStorage.getItem(LS.notes) === '1';

  const sn = localStorage.getItem(LS.showNum);
  state.showNum = sn == null ? true : sn === '1';
  const ss = localStorage.getItem(LS.showSection);
  state.showSection = ss == null ? true : ss === '1';

  try {
    const h = JSON.parse(localStorage.getItem(LS.hidden) || '[]');
    if (Array.isArray(h)) state.hidden = new Set(h.filter((n) => n >= 0 && n < TOTAL_SLIDES));
  } catch { state.hidden = new Set(); }

  const cur = parseInt(localStorage.getItem(LS.current) || '0', 10);
  state.current = Number.isFinite(cur) && cur >= 0 && cur < TOTAL_SLIDES ? cur : 0;
  if (state.hidden.has(state.current)) {
    const v = state.hidden.size < TOTAL_SLIDES ? (nextVisible(state.current, 1) === -1 ? nextVisible(state.current, -1) : nextVisible(state.current, 1)) : state.current;
    if (v !== -1) state.current = v;
  }
}

/* ---------------- Test API ---------------- */
function installTestApi() {
  window.__PRESENTATION_TEST__ = {
    ready: false,
    totalSlides: TOTAL_SLIDES,
    getState: () => ({
      current: state.current,
      theme: state.theme,
      notesVisible: state.notesVisible,
      hidden: Array.from(state.hidden),
      showNum: state.showNum,
      showSection: state.showSection
    }),
    goToSlideInstant: (n) => goTo(n, { instant: true }),
    setState: (n) => goTo(n, { instant: true }),
    setTheme,
    setNotes,
    setHidden,
    setShowNum,
    setShowSection,
    next: goNext,
    prev: goPrev,
    waitForIdle: () => new Promise((resolve) => {
      const check = () => (state.isTransitioning ? requestAnimationFrame(check) : resolve());
      check();
    }),
    preparePrint,
    restorePrint
  };
}

/* ---------------- Boot ---------------- */
async function boot() {
  el.stage = document.getElementById('stage');
  el.scaler = document.getElementById('slide-scaler');
  el.container = document.getElementById('slide-container');
  el.counter = document.getElementById('slide-counter');
  el.section = document.getElementById('section-label');
  el.navPrev = document.getElementById('nav-prev');
  el.navNext = document.getElementById('nav-next');
  el.notesOverlay = document.getElementById('notes-overlay');
  el.notesBody = document.getElementById('notes-body');
  el.notesToggle = document.getElementById('notes-toggle');

  restoreState();
  document.documentElement.setAttribute('data-theme', state.theme);

  await loadSlides();

  // Activate initial slide instantly.
  state.slides.forEach((s) => s.classList.remove('active'));
  state.slides[state.current].classList.add('active');
  gsap.set(state.slides[state.current], { opacity: 1, x: 0, scale: 1 });

  updateChrome();
  updateNotes();

  el.navPrev.addEventListener('click', goPrev);
  el.navNext.addEventListener('click', goNext);
  el.notesToggle.addEventListener('click', toggleNotes);

  setupKeys();
  setupTouch();
  setupEdgeReveal();
  window.addEventListener('resize', fitCanvas);
  fitCanvas();

  // Admin wiring
  const controller = {
    THEMES,
    TOTAL_SLIDES,
    state,
    getSlideTitle: (i) => {
      const s = state.slides[i];
      const h = s && s.querySelector('.slide-title');
      return h ? h.textContent.trim() : `Slide ${i + 1}`;
    },
    setTheme, setNotes, setShowNum, setShowSection, setHidden,
    goTo: (i) => goTo(i, { direction: i > state.current ? 1 : -1 }),
    exportPDF
  };
  const admin = initAdmin(controller);
  el.openAdmin = admin.open;
  el.closeAdmin = admin.close;
  el.adminOpen = admin.isOpen;
  el.onThemeChange = admin.syncTheme;
  el.onNotesChange = admin.syncNotes;
  el.onHiddenChange = admin.syncHidden;
  el.onSlideChange = admin.syncSlide;

  installTestApi();
  window.__PRESENTATION_TEST__.ready = true;
  document.body.setAttribute('data-ready', '1');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
