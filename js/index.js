window.addEventListener('DOMContentLoaded', ()=>{
// ------------------------------------slaider

new Swiper('.swiper', {
// Optional parameters
loop: true,
allowTouchMove:true,

// If we need pagination
pagination: {
el: '.swiper-pagination-first',
clickable:true
},

// Navigation arrowLefts
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

// And if we need scrollbar
scrollbar: {
el: '.swiper-scrollbar',
},
});

new Swiper('.mySwiper', {
// Optional parameters
loop: true,
allowTouchMove:true,


// If we need pagination
pagination: {
clickable:true,
renderBullet: function (index, className) {
var arr = new Array('Prengi Production','Prengi FMC', 'Prengi Mallz Retail', 'Prengi Logistic', 'Prengi IT', 'Prengi HR');
return '<li class="' + className + '">' + (arr[index -1 + 1]) + '</li>';
},
el: '.swiper-pagination',
},

// Navigation arrowLefts
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
clickable:true
},

// And if we need scrollbar
/* scrollbar: {
el: '.swiper-scrollbar',
}, */
});
// ------------------------------------mobile menu

const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.top__menu__list'),
content = document.querySelector('.main__content'),
bullet = document.querySelector('.swiper-pagination'),
prev = document.querySelector('.swiper-button-prev'),
next = document.querySelector('.swiper-button-next');

hamburger.addEventListener('click', ()=> {
hamburger.classList.toggle('active');
menu.classList.toggle('active');
if (window.screen.width <= 700) {
content.classList.toggle('opacity');
bullet.classList.toggle('opacity');
prev.classList.toggle('opacity');
next.classList.toggle('opacity');

}
});
let topMenu = this.document.querySelector('.top__menu');
window.addEventListener('scroll', function() {
if(window.pageYOffset > 500) {
  topMenu.classList.add('fixed');
} else {
  topMenu.classList.remove('fixed');
}
});

let bulletValue = document.querySelectorAll('.swiper .swiper-pagination-bullet'),
arrowLeft = document.querySelector('.swiper-button-prev'),
arrowRight = document.querySelector('.swiper-button-next'),
padding = 0;
if(window.screen.width > 1050) {
padding = bulletValue.length * 2;
}
if(window.screen.width < 1050) {
padding = bulletValue.length * 3;
}
if(window.screen.width < 770) {
padding = bulletValue.length * 4;
}

arrowLeft.style.left = 50 - padding + '%';
arrowRight.style.right = 50 - padding + '%';



// ------------------------------------mobile footer
if(window.screen.width < 750) {
const row = document.querySelectorAll('.footer__menu_items');

row.forEach(item =>{
  item.addEventListener('click', ()=>{
    for(let child of item.children) {
      child.classList.toggle('active');
    }
  });
});
}});









