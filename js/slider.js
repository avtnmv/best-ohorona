document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        slidesPerGroup: 1, // Добавлено: прокручивать по 1 слайду
        spaceBetween: 24,
        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                slidesPerGroup: 1 // Для планшетов тоже по 1 слайду
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 1 // Для десктопов тоже по 1 слайду
            }
        }
    });
    
    const progressBar = document.querySelector('.swiper-progress-bar');
    const readMoreBtns = document.querySelectorAll('.read-more');
    
    // Обновляем прогресс бар при переключении слайдов
    swiper.on('slideChange', function() {
        const progress = (swiper.activeIndex / (swiper.slides.length - swiper.params.slidesPerView)) * 100;
        progressBar.style.width = `${progress}%`;
    });
    
    // Инициализация прогресс бара
    progressBar.style.width = `${(swiper.activeIndex / (swiper.slides.length - swiper.params.slidesPerView)) * 100}%`;
    
    // Кнопка "читати далi" с плавной анимацией
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const slide = this.closest('.slide');
            const text = slide.querySelector('.text');
            
            if (slide.classList.contains('expanded')) {
                // Закрываем
                slide.style.height = '225px';
                setTimeout(() => {
                    slide.classList.remove('expanded');
                    this.textContent = 'читати далi';
                }, 500);
            } else {
                // Открываем
                slide.classList.add('expanded');
                const fullHeight = slide.scrollHeight;
                slide.style.height = `${fullHeight}px`;
                this.textContent = 'згорнути';
            }
        });
    });
});