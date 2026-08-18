/* =========================================================
   Instituto Samantha Vitale — interações
   Vanilla JS, sem dependências pesadas.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Header dinâmico ao rolar ---------- */
  var header = document.getElementById('site-header');
  var lastScrollState = false;
  function updateHeader() {
    var scrolled = window.scrollY > 24;
    if (scrolled !== lastScrollState) {
      header.classList.toggle('is-scrolled', scrolled);
      lastScrollState = scrolled;
    }
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  /* ---------- Menu mobile ---------- */
  var menuToggle = document.getElementById('menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  function openMenu() {
    mobileNav.hidden = false;
    requestAnimationFrame(function () {
      mobileNav.classList.add('is-open');
    });
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Fechar menu');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    document.body.style.overflow = '';
    window.setTimeout(function () {
      if (!mobileNav.classList.contains('is-open')) mobileNav.hidden = true;
    }, 380);
  }
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      var isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) { closeMenu(); } else { openMenu(); }
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') closeMenu();
    });
  }

  /* ---------- Reveal on scroll (fade / slide up) ---------- */
  var revealEls = document.querySelectorAll('.reveal-up, .reveal-fade');
  if ('IntersectionObserver' in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = Math.min((i % 4) * 60, 180);
          window.setTimeout(function () { el.classList.add('is-visible'); }, delay);
          revealObserver.unobserve(el);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Modal de ampliação (Antes/Depois) ---------- */
  var modal = document.getElementById('ba-modal');
  var modalContent = document.getElementById('ba-modal-content');
  var expandButtons = document.querySelectorAll('[data-ba-expand]');
  var lastFocusedEl = null;

  function openModal(btn) {
    lastFocusedEl = document.activeElement;
    modalContent.src = btn.getAttribute('data-ba-img') || '';
    modalContent.alt = btn.getAttribute('data-ba-alt') || '';
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    var closeBtn = modal.querySelector('.ba-modal-close');
    if (closeBtn) closeBtn.focus();
  }
  function closeModal() {
    modal.hidden = true;
    modalContent.src = '';
    document.body.style.overflow = '';
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  expandButtons.forEach(function (btn) {
    btn.addEventListener('click', function () { openModal(btn); });
  });
  modal.querySelectorAll('[data-ba-close]').forEach(function (el) {
    el.addEventListener('click', closeModal);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  /* ---------- FAQ Accordion ---------- */
  var accordionTriggers = document.querySelectorAll('.accordion-trigger');
  accordionTriggers.forEach(function (trigger) {
    var panel = trigger.closest('.accordion-item').querySelector('.accordion-panel');
    trigger.addEventListener('click', function () {
      var isOpen = trigger.getAttribute('aria-expanded') === 'true';

      // fecha os demais (comportamento de accordion único)
      accordionTriggers.forEach(function (other) {
        if (other !== trigger) {
          other.setAttribute('aria-expanded', 'false');
          var otherPanel = other.closest('.accordion-item').querySelector('.accordion-panel');
          otherPanel.style.maxHeight = null;
        }
      });

      if (isOpen) {
        trigger.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = null;
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Ano dinâmico no footer ---------- */
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

})();
