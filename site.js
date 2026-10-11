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
