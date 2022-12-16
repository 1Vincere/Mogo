const menu = document.querySelector('.nav_toggle');
const menu1 = document.querySelector('.nav');
if (menu && menu1) {
  menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    menu1.classList.toggle('active');
  });
}
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const blockId = anchor.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
const accordion = document.querySelector('.accordion_item');
if (accordion) {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('active');
  });
}
const accordion2 = document.querySelector('.accordion_item2');
if (accordion2) {
  accordion2.addEventListener('click', () => {
    accordion2.classList.toggle('active');
  });
}
const accordion3 = document.querySelector('.accordion_item3');
if (accordion3) {
  accordion3.addEventListener('click', () => {
    accordion3.classList.toggle('active');
  });
}
