window.addEventListener('load', function() {

    if (typeof ScrollReveal !== 'undefined') {
        
        if (document.getElementById('boletin-animado')) {
            ScrollReveal().reveal('#boletin-animado', { 
                delay: 300, 
                duration: 1000, 
                origin: 'left', 
                distance: '300px' 
            });
        }

        if (document.getElementById('seccion-tarjetas')) {
            ScrollReveal().reveal('#seccion-tarjetas', { 
                delay: 500, 
                duration: 1000, 
                origin: 'bottom', 
                distance: '80px' 
            });
        }
    }

    if (document.querySelector('.gallery-slider') && document.querySelector('.gallery-thumbs')) {
        
        var slider = new Swiper('.gallery-slider', {
            slidesPerView: 1,
            centeredSlides: true,
            loop: true,
            loopedSlides: 6,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            observer: true,
            observeParents: true
        });


        var thumbs = new Swiper('.gallery-thumbs', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            centeredSlides: true,
            loop: true,
            loopedSlides: 6, 
            slideToClickedSlide: true,
            observer: true,
            observeParents: true
        });

        slider.controller.control = thumbs;
        thumbs.controller.control = slider;
    }
});