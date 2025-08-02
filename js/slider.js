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

document.querySelectorAll('.read-more').forEach(btn => {
    btn.addEventListener('click', function() {
        const slide = this.closest('.slide');
        if (!slide) return;
        
        if (!slide.classList.contains('expanded')) {
            // Разворачиваем контент
            slide.classList.add('expanded');
            slide.style.height = `${slide.scrollHeight}px`;
            this.textContent = 'Згорнути';
        } else {
            // Сворачиваем контент
            slide.classList.remove('expanded');
            slide.style.height = '225px'; // Возвращаем исходную высоту
            this.textContent = 'Читати далi...';
        }
    });
});
  initPromoSlider();
  
  window.addEventListener('resize', initPromoSlider);


});