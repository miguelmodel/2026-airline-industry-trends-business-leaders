import { gsap } from 'gsap';

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function killAll(el) {
  if (!el) return;
  gsap.killTweensOf(el);
  el.querySelectorAll('*').forEach((c) => gsap.killTweensOf(c));
}

function cleanup(el) {
  if (!el) return;
  gsap.set(el, { clearProps: 'opacity,visibility,transform,scale,x,y' });
}

function typeOf(el) {
  return (el && el.getAttribute('data-type')) || 'default';
}

function pickTransition(type) {
  if (type === 'title-slide') return 'zoom';
  if (type === 'transition' || type === 'recap') return 'dissolve';
  if (type === 'code-example') return 'fadeScale';
  return 'slide';
}

/**
 * Transition between two slide elements.
 * Returns a Promise that resolves when the animation completes.
 */
export function transitionSlides(oldEl, newEl, direction = 1) {
  return new Promise((resolve) => {
    if (newEl === oldEl || !newEl) {
      resolve();
      return;
    }

    killAll(oldEl);
    killAll(newEl);

    const kind = pickTransition(typeOf(newEl));
    const dur = prefersReduced ? 0.001 : 0.55;

    // Position incoming slide BEFORE making it visible.
    newEl.classList.add('active');

    const finish = () => {
      if (oldEl && oldEl !== newEl) {
        oldEl.classList.remove('active');
        cleanup(oldEl);
      }
      cleanup(newEl);
      resolve();
    };

    if (prefersReduced) {
      gsap.set(newEl, { opacity: 1, x: 0, scale: 1 });
      if (oldEl && oldEl !== newEl) gsap.set(oldEl, { opacity: 0 });
      finish();
      return;
    }

    const tl = gsap.timeline({ onComplete: finish });

    if (kind === 'zoom') {
      gsap.set(newEl, { opacity: 0, scale: 1.06, transformOrigin: 'center center' });
      if (oldEl && oldEl !== newEl) tl.to(oldEl, { opacity: 0, duration: dur * 0.5, overwrite: 'auto' }, 0);
      tl.to(newEl, { opacity: 1, scale: 1, duration: dur, ease: 'power2.out', overwrite: 'auto' }, 0);
    } else if (kind === 'dissolve') {
      gsap.set(newEl, { opacity: 0, x: 0, scale: 1 });
      if (oldEl && oldEl !== newEl) tl.to(oldEl, { opacity: 0, duration: dur * 0.7, ease: 'power1.inout', overwrite: 'auto' }, 0);
      tl.to(newEl, { opacity: 1, duration: dur, ease: 'power1.inout', overwrite: 'auto' }, 0.08);
    } else if (kind === 'fadeScale') {
      gsap.set(newEl, { opacity: 0, scale: 0.985 });
      if (oldEl && oldEl !== newEl) tl.to(oldEl, { opacity: 0, duration: dur * 0.55, overwrite: 'auto' }, 0);
      tl.to(newEl, { opacity: 1, scale: 1, duration: dur, ease: 'power2.out', overwrite: 'auto' }, 0.05);
    } else {
      const off = 90 * (direction >= 0 ? 1 : -1);
      gsap.set(newEl, { opacity: 0, x: off, scale: 1 });
      if (oldEl && oldEl !== newEl) tl.to(oldEl, { opacity: 0, x: -off * 0.6, duration: dur * 0.7, ease: 'power2.in', overwrite: 'auto' }, 0);
      tl.to(newEl, { opacity: 1, x: 0, duration: dur, ease: 'power2.out', overwrite: 'auto' }, 0.05);
    }
  });
}

export function instantSwap(oldEl, newEl) {
  if (oldEl && oldEl !== newEl) {
    killAll(oldEl);
    oldEl.classList.remove('active');
    cleanup(oldEl);
  }
  if (newEl) {
    killAll(newEl);
    newEl.classList.add('active');
    cleanup(newEl);
    gsap.set(newEl, { opacity: 1, x: 0, scale: 1 });
  }
}
