/**
 * HiHiHaHa Squad — Main JavaScript
 * Handles accessible mobile navigation, reveal-on-scroll, and back-to-top.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initRevealAnimations();
  initBackToTop();
});

/**
 * Mobile Navigation Menu (Accessible Disclosure)
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (!toggleBtn || !mobileNav) return;

  const closeMenu = (returnFocus = false) => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('is-open');
    if (returnFocus) {
      toggleBtn.focus();
    }
  };

  const openMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('is-open');
  };

  // Toggle button click
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking mobile links
  const navLinks = mobileNav.querySelectorAll('a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key and return focus
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu(true);
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (
      toggleBtn.getAttribute('aria-expanded') === 'true' &&
      !mobileNav.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Close on viewport resize over 860px
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 860 && toggleBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });
}

/**
 * Subtle Reveal-on-scroll using IntersectionObserver
 */
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  reveals.forEach((el) => observer.observe(el));
}

/**
 * Back to top scroll button
 */
function initBackToTop() {
  const backBtn = document.querySelector('.back-to-top');
  if (!backBtn) return;

  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
  });
}
