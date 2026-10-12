/** Progressive enhancements. Page and language links stay native. */
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initRevealAnimations();
});

function initMobileNav() {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.mobile-nav');
  if (!button || !nav) return;
  const desktop = window.matchMedia('(min-width: 900px)');
  const english = document.documentElement.lang === 'en';
  const setOpen = (open, returnFocus = false) => {
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', english
      ? (open ? 'Close navigation menu' : 'Open navigation menu')
      : (open ? 'Đóng menu điều hướng' : 'Mở menu điều hướng'));
    nav.classList.toggle('is-open', open);
    if (returnFocus) button.focus();
  };
  button.addEventListener('click', () => {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') setOpen(false, true);
  });
  document.addEventListener('click', (event) => {
    if (button.getAttribute('aria-expanded') === 'true' && !nav.contains(event.target) && !button.contains(event.target)) {
      setOpen(false, nav.contains(document.activeElement));
    }
  });
  document.addEventListener('focusin', (event) => {
    if (!nav.contains(event.target) && !button.contains(event.target)) setOpen(false);
  });
  desktop.addEventListener('change', () => {
    const focused = document.activeElement;
    const header = document.querySelector('.site-header');
    if (desktop.matches && (nav.contains(focused) || focused === button)) {
      header.querySelector('.site-brand').focus();
    } else if (!desktop.matches && header.querySelector('.site-nav').contains(focused)) {
      button.focus();
    }
    setOpen(false);
  });
  setOpen(false);
  document.documentElement.classList.add('nav-enhanced');
}

function initRevealAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}
