(() => {
  const legacyProjects = {
    '#mhd': '/nsinduct.html',
    '#quasar-modeling': '/quasar.html#models',
    '#grb-computation': '/grb.html',
    '#metasurface': '/research.html#metasurfaces'
  };
  const legacyHome = {
    '#about': '/about.html',
    '#research': '/research.html',
    '#projects': '/research.html',
    '#cv': '/cv.html',
    '#contact': '/contact.html',
    '#quasar': '/quasar.html'
  };
  const { pathname, hash } = location;
  const anchor = hash.toLowerCase();
  let destination;
  if (pathname === '/' || pathname === '/index.html') destination = legacyHome[anchor];
  if (['/projects.html', '/projects/', '/projects/index.html'].includes(pathname)) {
    destination = legacyProjects[anchor] || '/research.html';
  }
  if (pathname === '/downloads/Daniil_Lysenko_CV_short.pdf') destination = '/cv.html';
  if (destination) {
    location.replace(destination);
    return;
  }

  const root = document.documentElement;
  const storageKey = 'daniil-site-theme';
  const preference = matchMedia('(prefers-color-scheme: dark)');
  let theme;
  const readSavedTheme = () => {
    try { theme = localStorage.getItem(storageKey); } catch {}
  };
  readSavedTheme();
  const preferredTheme = () => theme === 'dark' || theme === 'light' ? theme : preference.matches ? 'dark' : 'light';
  root.dataset.theme = preferredTheme();
  root.classList.add('js');

  document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      const updateTheme = () => {
        const current = preferredTheme();
        const nextLabel = current === 'dark' ? 'Light' : 'Dark';
        root.dataset.theme = current;
        themeToggle.setAttribute('aria-label', `Switch to ${nextLabel.toLowerCase()} theme`);
        themeToggle.querySelector('.theme-word').textContent = nextLabel;
        document.querySelector('meta[name="theme-color"]').content = current === 'dark' ? '#0d1421' : '#faf9f6';
      };
      updateTheme();
      themeToggle.addEventListener('click', () => {
        theme = preferredTheme() === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem(storageKey, theme); } catch {}
        updateTheme();
      });
      preference.addEventListener('change', updateTheme);
      window.addEventListener('pageshow', event => {
        if (event.persisted) {
          readSavedTheme();
          updateTheme();
        }
      });
    }

    const desktop = matchMedia('(width > 820px)');
    const menu = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.primary-nav');
    if (menu && nav) {
      const setMenu = open => {
        menu.setAttribute('aria-expanded', String(open));
        menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
        nav.classList.toggle('is-open', open);
      };
      menu.addEventListener('click', () => {
        const open = menu.getAttribute('aria-expanded') === 'false';
        setMenu(open);
        if (open) nav.querySelector('a').focus();
      });
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
          setMenu(false);
          menu.focus();
        }
      });
      desktop.addEventListener('change', () => setMenu(false));
    }

    document.querySelectorAll('[data-current-year]').forEach(el => {
      el.textContent = new Date().getFullYear();
    });

    const viewer = document.querySelector('[data-quasar-viewer]');
    if (viewer) {
      const plot = viewer.querySelector('.plotly-view');
      const status = viewer.querySelector('.model-load-status');
      const showFallback = () => {
        plot.hidden = true;
        status.textContent = 'The interactive model could not load. The static view is below.';
        status.hidden = false;
      };
      plot.addEventListener('plotready', () => {
        viewer.dataset.plotReady = '';
        status.hidden = true;
      });
      plot.addEventListener('plotfailed', showFallback);
      const loadPlot = () => {
        if (!desktop.matches || viewer.dataset.plotRequested !== undefined) return;
        viewer.dataset.plotRequested = '';
        status.textContent = 'Loading the interactive model…';
        status.hidden = false;
        const script = document.createElement('script');
        script.src = '/interactive/disk_absorber_plot.js';
        script.addEventListener('error', showFallback);
        document.head.append(script);
      };
      desktop.addEventListener('change', loadPlot);
      loadPlot();
    }
  });
})();
