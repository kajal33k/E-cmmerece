var swiper = new Swiper(".mySwiper", {
     cssMode: true,
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",

     },
     pagination: {
       el: ".swiper-pagination",
     },
     mousewheel: true,
     keyboard: true,
     
});


// Get the menu button and the menu itself
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

// Add event listener for click on the menu button
menuButton.addEventListener('click', function() {
  // Toggle the 'hidden' class on the menu to show/hide it
  menu.classList.toggle('hidden');
});




  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  });

