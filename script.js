(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('#nav-menu');
  const themeToggle = document.querySelector('#theme-toggle');
  const root = document.documentElement;

  navToggle?.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
      navToggle?.setAttribute('aria-label', 'Open navigation');
    });
  });

  const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    const light = theme === 'light';
    themeToggle?.setAttribute('aria-pressed', String(light));
    themeToggle?.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    const label = themeToggle?.querySelector('.theme-label');
    const icon = themeToggle?.querySelector('.theme-icon');
    if (label) label.textContent = light ? 'Dark' : 'Light';
    if (icon) icon.textContent = light ? '◐' : '☼';
  };

  const savedTheme = localStorage.getItem('portfolio-theme');
  const preferredTheme = window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : preferredTheme);
  themeToggle?.addEventListener('click', () => {
    setTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('#nav-menu a')];
  const activeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  sections.forEach(section => activeObserver.observe(section));

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('[data-placeholder-link]').forEach(link => {
    link.addEventListener('click', event => {
      if (link.getAttribute('href') === '#') event.preventDefault();
    });
  });
})();
