$(document).ready(function(){
    $('.js-index-slider').slick({
        prevArrow: '.index-slider__controls--prev',
        nextArrow: '.index-slider__controls--next',
        dots: true,
        vertical: true,
        customPaging: function () {
            return '<a class="index-slider__dots"></a>';
        }
    });

    $('.js-recommended-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.recommended-slider__controls--prev',
        nextArrow: '.recommended-slider__controls--next',
        dots: true,
        appendDots: '.recommended-slider__dots',
        customPaging: function () {
            return '<a class="recommended-slider__dot"></a>';
        }
    });
    function indexSliderElemPos(elem, pos) {
        var windowWidth = $(window).width(),
            containerWidth = $('.container').width(),
            leftPos = (windowWidth - containerWidth)/2;
            $('.index-slider ' + elem).css(pos, leftPos);
    }
    indexSliderElemPos('.slick-dots', 'left');
    indexSliderElemPos('.index-slider__controls', 'right');
    $(window).resize(function () {
        indexSliderElemPos('.slick-dots', 'left');
        indexSliderElemPos('.index-slider__controls', 'right');


    });
    });
    