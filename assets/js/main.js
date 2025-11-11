// JS compartit: any actual, toggle menú mòbil i mode fosc
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

  const navToggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  if (navToggle && menu) {
    navToggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  const THEME_KEY = 'prefers-theme';
  const root = document.documentElement;
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'dark') {
    root.setAttribute('data-theme', 'dark');
  }
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark' ? 'true' : 'false');
    toggle.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark) {
        root.removeAttribute('data-theme');
        localStorage.setItem(THEME_KEY, 'light');
        toggle.setAttribute('aria-pressed', 'false');
      } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem(THEME_KEY, 'dark');
        toggle.setAttribute('aria-pressed', 'true');
      }
    });
  }
})();


