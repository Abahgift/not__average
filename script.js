const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const form = document.querySelector('#application-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const status = form.querySelector('.form-status');
  status.textContent = 'APPLICATION RECEIVED. YOU JUST MADE A MOVE.';
  form.reset();
});

document.querySelector('.share-button')?.addEventListener('click', async () => {
  const text = 'NOT__AVERAGE — a Lagos creative community for people done waiting for permission.';
  try { await navigator.share({ title: 'NOT__AVERAGE', text, url: location.href }); }
  catch { await navigator.clipboard?.writeText(`${text} ${location.href}`); document.querySelector('.share-button').textContent = 'LINK COPIED. PASS IT ON.'; }
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('in-view');
}), { threshold: .12 });
document.querySelectorAll('.feature-card,.steps article,.campaign,details').forEach(el => observer.observe(el));
