/** @format */

const swiper = new Swiper(".reviews__swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper__button.next", // Настраиваем Swiper на кастомные классы
    prevEl: ".swiper__button.prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

