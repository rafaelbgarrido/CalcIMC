// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Back-to-top visibility
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', ()=>{
  if (!toTop) return;
  const show = window.scrollY > 300;
  toTop.classList.toggle('show', show);
});
