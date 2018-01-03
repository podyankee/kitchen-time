$(document).ready(function(){
    $('.js-index-slider').slick({
        dots: true,
        vertical: true,
        prevArrow: '.index-slider-controls--prev',
        nextArrow: '.index-slider-controls--next',
        customPaging : function() {
            return '<a class="index-slider__dots"></a>';
        },
    });
    $('.js-recommended-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        appendDots: '.recommended-slider__nav',
        dots: true,
        prevArrow: '.recommended-slider__controls--prev',
        nextArrow: '.recommended-slider__controls--next',
        customPaging : function() {
            return '<a class="recommended-slider__dot"></a>';
        },
    });


    function indexSliderElemPos(elem, pos) {
        var windowWidth = $(window).width(),
            containerWidth = $('.container').width(),
            leftPos = (windowWidth - containerWidth)/2;
        $('.index-slider ' + elem).css(pos, leftPos);
    }
    indexSliderElemPos('.slick-dots', 'left');
    indexSliderElemPos('.index-slider-controls', 'right');
    $(window).resize(function () {
        indexSliderElemPos('.slick-dots', 'left');
        indexSliderElemPos('.index-slider-controls', 'right');
    });

    // Слайдер продукта

    $('.js-product-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.js-product-gallery-nav',
        prevArrow: '.product-gallery__controls--prev',
        nextArrow: '.product-gallery__controls--next'
    });
    // Слайдер навигации продукта

    $('.js-product-gallery-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.js-product-gallery'
    });

    // Tabs

    $('.tabs-list__item').click(function () {
        var tabName = $(this).attr('show-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabs-content .' + tabName).addClass('active').siblings().removeClass('active');
    });

    

    // Video start

    $('.video-start').click(function () {
        var videoId = $(this).parent().attr('data-video-id'),
            videoPlayer = $(this).parent().attr('id');
        player = new YT.Player(videoPlayer, {
           "autoplay" :1,
            videoId: videoId
            
            
        });
    });

});