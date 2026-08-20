/* Settings panel / admin controller */

const THEME_META = {
  'github-cosmos': { label: 'GitHub Cosmos', dot: '#58a6ff' },
  'warm': { label: 'Warm', dot: '#c47a2e' },
  'corporate': { label: 'Corporate', dot: '#0066cc' },
  'cyberpunk': { label: 'Cyberpunk', dot: '#00ffd5' }
};

export function initAdmin(ctrl) {
  const overlay = document.getElementById('admin-overlay');
  const panel = document.getElementById('admin-panel');
  const openBtn = document.getElementById('admin-toggle');
  const closeBtn = document.getElementById('admin-close');
  const themeGrid = document.getElementById('theme-grid');
  const notesSwitch = document.getElementById('sw-notes');
  const numSwitch = document.getElementById('sw-num');
  const sectionSwitch = document.getElementById('sw-section');
  const gotoInput = document.getElementById('goto-input');
  const gotoBtn = document.getElementById('goto-btn');
  const pdfBtn = document.getElementById('pdf-btn');
  const checklist = document.getElementById('checklist');

  let open = false;

  /* Theme buttons */
  ctrl.THEMES.forEach((theme) => {
    const meta = THEME_META[theme];
    const b = document.createElement('button');
    b.className = 'theme-btn';
    b.dataset.theme = theme;
    b.innerHTML = `<span class="dot" style="background:${meta.dot}"></span><span>${meta.label}</span>`;
    b.addEventListener('click', () => ctrl.setTheme(theme));
    themeGrid.appendChild(b);
  });

  /* Checklist */
  function buildChecklist() {
    checklist.innerHTML = '';
    for (let i = 0; i < ctrl.TOTAL_SLIDES; i++) {
      const row = document.createElement('div');
      row.className = 'check-row';
      row.dataset.index = String(i);

      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = !ctrl.state.hidden.has(i);
      cb.title = 'Show/hide slide';
      cb.setAttribute('aria-label', `Show slide ${i + 1}`);
      cb.addEventListener('change', () => ctrl.setHidden(i, !cb.checked));

      const title = document.createElement('span');
      title.className = 'cr-title';
      let t = ctrl.getSlideTitle(i);
      if (t.length > 42) t = t.slice(0, 41) + '…';
      title.textContent = `Slide ${i + 1}: ${t}`;
      title.title = ctrl.getSlideTitle(i);

      const go = document.createElement('button');
      go.className = 'cr-go';
      go.textContent = '▶';
      go.title = 'Go to slide';
      go.setAttribute('aria-label', `Go to slide ${i + 1}`);
      go.addEventListener('click', () => { ctrl.goTo(i); });

      row.appendChild(cb);
      row.appendChild(title);
      row.appendChild(go);
      checklist.appendChild(row);
    }
    syncHidden();
    syncSlide(ctrl.state.current);
  }

  /* Sync helpers */
  function syncTheme(theme) {
    themeGrid.querySelectorAll('.theme-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.theme === theme);
    });
  }
  function syncNotes(v) { notesSwitch.checked = !!v; }
  function syncHidden() {
    checklist.querySelectorAll('.check-row').forEach((row) => {
      const i = parseInt(row.dataset.index, 10);
      const hidden = ctrl.state.hidden.has(i);
      row.classList.toggle('hidden-slide', hidden);
      const cb = row.querySelector('input[type="checkbox"]');
      if (cb) cb.checked = !hidden;
    });
  }
  function syncSlide(idx) {
    checklist.querySelectorAll('.check-row').forEach((row) => {
      row.style.background = parseInt(row.dataset.index, 10) === idx
        ? 'color-mix(in srgb, var(--accent-primary) 16%, transparent)'
        : '';
    });
  }

  /* Open / close */
  function openPanel() {
    open = true;
    overlay.classList.add('open');
    openBtn.setAttribute('aria-expanded', 'true');
    syncTheme(ctrl.state.theme);
    syncNotes(ctrl.state.notesVisible);
    numSwitch.checked = ctrl.state.showNum;
    sectionSwitch.checked = ctrl.state.showSection;
    syncHidden();
    closeBtn.focus();
  }
  function closePanel() {
    open = false;
    overlay.classList.remove('open');
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.focus();
  }

  openBtn.addEventListener('click', openPanel);
  closeBtn.addEventListener('click', closePanel);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closePanel(); });

  notesSwitch.addEventListener('change', () => ctrl.setNotes(notesSwitch.checked));
  numSwitch.addEventListener('change', () => ctrl.setShowNum(numSwitch.checked));
  sectionSwitch.addEventListener('change', () => ctrl.setShowSection(sectionSwitch.checked));

  function doGoto() {
    const n = parseInt(gotoInput.value, 10);
    if (Number.isFinite(n) && n >= 1 && n <= ctrl.TOTAL_SLIDES) {
      ctrl.goTo(n - 1);
      closePanel();
    }
  }
  gotoBtn.addEventListener('click', doGoto);
  gotoInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); doGoto(); } });

  pdfBtn.addEventListener('click', () => ctrl.exportPDF());

  buildChecklist();

  return {
    open: openPanel,
    close: closePanel,
    isOpen: () => open,
    syncTheme,
    syncNotes,
    syncHidden,
    syncSlide
  };
}
