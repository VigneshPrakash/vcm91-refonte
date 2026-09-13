// Shared across every mockup page — toggles the sticky header's scrolled
// state (navy blends into the page at rest, red line + shadow once scrolled).
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 8) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Scroll-reveal — every card/block/section fades and lifts into place the
// first time it enters the viewport. Runs once per element (no re-trigger
// on scroll back up), with a short staggered delay for siblings inside the
// same grid/list so groups of cards animate in sequence rather than all at
// once. Falls back to fully visible immediately if IntersectionObserver
// isn't available, or if the visitor has reduced-motion set.
(function () {
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var selector = [
    '.card', '.blog-post', '.announce-card', '.timeline-item',
    '.person-card', '.section-head', '.group-chip', '.jersey-variant',
    '.info-note'
  ].join(', ');

  var targets = Array.prototype.slice.call(document.querySelectorAll(selector));
  if (!targets.length) return;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('reveal-visible'); });
    return;
  }

  // Stagger by position within each shared parent, capped so long lists
  // don't end up with a multi-second tail.
  var parentCounts = new Map();
  targets.forEach(function (el) {
    el.classList.add('reveal');
    var parent = el.parentElement;
    var i = parentCounts.get(parent) || 0;
    parentCounts.set(parent, i + 1);
    var delay = Math.min(i * 80, 320);
    el.style.transitionDelay = delay + 'ms';
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(function (el) { observer.observe(el); });
})();

// Hamburger nav (below 1024px, see the media query in style.css) —
// nav.main-nav doubles as the dropdown panel itself, so this just
// toggles its .nav-open class and swaps the icon glyph between
// menu/close, rather than managing a separate mobile-only menu element.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.main-nav');
  if (!toggle || !nav) return;

  var icon = toggle.querySelector('.material-symbols-outlined');

  function setOpen(isOpen) {
    nav.classList.toggle('nav-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (icon) icon.textContent = isOpen ? 'close' : 'menu';
  }

  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('nav-open'));
  });

  // Closing on link tap matters here specifically because nav.main-nav
  // stays mounted (just hidden) rather than being torn down on
  // navigation — a same-page anchor link wouldn't otherwise reset it.
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });
})();
