;(function($){
    $(document).ready(function(){

        const $HTML = $('html');
        const HAMBURGER      = document.querySelector('.js-hamburger');
        const MENU           = document.querySelector('.js-mobile-menu');

        /**
         * Open mobil menu
         */
        (HAMBURGER) && (HAMBURGER).addEventListener('click', (event) => {
            (MENU) && (MENU).classList.add('menu_opened');
            $HTML.addClass('popup-opened');
        });


        /**
         * Close mobil menu
         */
        document.body.addEventListener('click', (event) => {

            if ( [...event.target.classList].includes('js-mobil-close'))
            {
                (MENU) && MENU.classList.remove('menu_opened');
                $HTML.removeClass('popup-opened');
            }
        });


        $('.js-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '.js-slider-small'
    });
    $('.js-slider-small').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.js-slider-big',
            centerMode: false,
            focusOnSelect: true,
            centerPadding: '20px',
            arrows: false,
            useTransform: false,
            responsive:[
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 5,

                    }
                },
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 4,

                    }

                },
                {
                    breakpoint: 570,
                    settings: {
                        slidesToShow: 3,

                    }

                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,

                    }

                },
        ]
    });

    });
})(jQuery);


