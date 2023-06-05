// let layer_1 = document.querySelector('.layer_1')
let layer_3 = document.querySelector('.layer_3')
let layer_4 = document.querySelector('.layer_4')
let layer_5 = document.querySelector('.layer_5')

window.onscroll = function(){
    let Y = window.scrollY;

    // layer_1.style.transform = 'translateY('+ Y/1.5 +'px)';
    layer_3.style.transform = 'translateY('+ Y/1.5 +'px)';
    layer_4.style.transform = 'translateY('+ Y/2 +'px)';
    layer_5.style.transform = 'translateY('+ Y/3 +'px)';
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});