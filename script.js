const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

function currentTheme() {
  return root.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
}

themeToggle.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

function setMenu(open) {
  menu.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}

menuToggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

document.getElementById('year').textContent = new Date().getFullYear();

// Anos de GitHub: conta criada em 08/03/2017, o número cresce sozinho com o tempo
const githubSince = new Date('2017-03-08');
const githubYears = Math.floor((Date.now() - githubSince) / (365.25 * 24 * 60 * 60 * 1000));
document.querySelectorAll('[data-years]').forEach((el) => { el.textContent = githubYears; });
