
// PureGlow – script.js
document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('#main-photo');
  document.querySelectorAll('[data-thumb]').forEach(t => {
    t.addEventListener('click', () => {
      const src = t.getAttribute('src');
      if(main && src){ main.setAttribute('src', src); main.alt = t.alt || 'PureGlow image'; }
    });
  });
  // Mobile nav toggle (optional enhancement)
  const burger = document.querySelector('#burger');
  const menu = document.querySelector('.menu');
  if (burger && menu) {
    burger.addEventListener('click', () => menu.classList.toggle('open'));
  }
});
