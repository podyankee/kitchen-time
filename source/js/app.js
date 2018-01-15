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

// Video

    $('.video-start').click(function () {
        var videoId = $(this).parent().attr('data-video-id'),
            videoPlayer = $(this).parent().attr('id');
        player = new YT.Player(videoPlayer, {
            "autoplay": 1,
            videoId: videoId


        });
    });

//Gallery slider
$('.js-product-gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".js-product-gallery-nav",
    prevArrow: '.product-gallery-controls--prev',
    nextArrow: '.product-gallery-controls--next'
    
});

//Gallery slider navigation
$('.js-product-gallery-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: ".js-product-gallery"
    
});

// Tabs

$('.tabs-list__item').click(function () {
    var tabName = $(this).attr('show-tab');
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabs-content .' + tabName).addClass('active').siblings().removeClass('active');
    console.log('.tabs-content .' + tabName);
});


$(document).on('click', '.faq__title', function () {
  $(this).parent().toggleClass('active');
  var faqContent = $(this).siblings();
  if(faqContent.is(':visible')) {
      faqContent.slideUp();
  } else {
      faqContent.slideDown();
  }
});

    });
    