// Old single-page bookmarks redirect to the appropriate page in the new site.
if (/\/(?:index\.html)?$/.test(window.location.pathname)) {
  const routes = { '#about': 'about.html', '#research': 'research.html', '#projects': 'projects.html', '#cv': 'cv.html', '#contact': 'contact.html', '#quasar': 'quasar.html' };
  const redirect = routes[window.location.hash.toLowerCase()];
  if (redirect) window.location.replace(new URL(redirect, window.location.href).href);
}
// Honor a saved choice; default to the operating-system theme.
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
  const syncTheme = () => {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    themeToggle.setAttribute('aria-pressed', String(dark));
    themeToggle.querySelector('.theme-glyph').textContent = dark ? '☀' : '☾';
    themeToggle.querySelector('.theme-word').textContent = dark ? 'Light' : 'Dark';
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.content = dark ? '#0d1421' : '#faf9f6';
  };
  syncTheme();
  themeToggle.addEventListener('click', () => {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('daniil-site-theme', next); } catch (e) {}
    syncTheme();
  });
  const preference = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  if (preference) preference.addEventListener('change', (event) => {
    let explicit = null;
    try { explicit = localStorage.getItem('daniil-site-theme'); } catch (e) {}
    if (explicit !== 'light' && explicit !== 'dark') {
      document.documentElement.setAttribute('data-theme', event.matches ? 'dark' : 'light');
      syncTheme();
    }
  });
}
document.documentElement.classList.add('js');
document.querySelectorAll('[data-current-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
const menuButton = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');
if (menuButton && primaryNav) {
  const setMenu = isOpen => {
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    primaryNav.classList.toggle('is-open', isOpen);
  };
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  primaryNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {setMenu(false); menuButton.focus();} });
  window.addEventListener('resize', () => { if (window.innerWidth > 820) setMenu(false); });
}
