document.addEventListener('DOMContentLoaded', function() {
  // 1. Слайдер отзывов
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 24,
    navigation: {
      nextEl: '.reviews-swiper .custom-next', // Уточняем область поиска
      prevEl: '.reviews-swiper .custom-prev',
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });

  const progressBar = document.querySelector('.reviews-swiper .swiper-progress-bar');
  if (progressBar) {
    reviewsSwiper.on('slideChange', function() {
      const progress = (reviewsSwiper.activeIndex / (reviewsSwiper.slides.length - reviewsSwiper.params.slidesPerView)) * 100;
      progressBar.style.width = `${progress}%`;
    });
    progressBar.style.width = '0%';
  }

 let promoSlider;
function initPromoSlider() {
  if (window.innerWidth < 1220) {
    if (!promoSlider) {
      promoSlider = new Swiper('.promo-swiper', {
        spaceBetween: 24,
        slidesPerGroup: 1,
        navigation: {
          nextEl: '.promo-swiper .promo-slider__button--next',
          prevEl: '.promo-swiper .promo-slider__button--prev',
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1070: { slidesPerView: 3 },
        }
      });
    }
  } else if (promoSlider) {
    promoSlider.destroy();
    promoSlider = null;
  }
}


  initPromoSlider();
  
  window.addEventListener('resize', initPromoSlider);


});