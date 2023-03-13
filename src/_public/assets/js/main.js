$(document).ready(function(){
    // init animation
    AOS.init();

    // mainvisual
    $('.c-mainvisual__slider').slick({
        speed: 1100,
        infinite: true,
        autoplay: false,
        cssEase: "eas-in-out",
        arrows: false,
    });

    $('.c-mainvisual__scrollbtn').on('click', function() {
        $('html').scrollTop($('.c-mainvisual').height())
    })

    var slider = $('.c-mainvisual__slider')
    slider.on("init", function () {
        slider.find(".slick-current").removeClass("slick-animated");
    });

    slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        slick.$slides.eq(nextSlide).addClass("slick-animated");
        setTimeout(function () {
            slider
                .find(".slick-slide:not(.slick-current)")
                .removeClass("slick-animated");
        }, 1500);
    });
    setTimeout(function () {
        slider.slick("slickPlay");
        slider.find(".slick-current").addClass("slick-animated");
    }, 2000);

    // Show hide recruit
    $('.c-recruit__tab').click(function() {
        $('.c-recruit__tab').each(function() {
            $(this).removeClass('is-active')
        })
        $(this).addClass('is-active')

        if($(this).hasClass('c-recruit__tab--bgblue') === true) {
            $('.c-recruit__tabcontent--black').removeClass('is-show')
            $('.c-recruit__tabcontent--blue').addClass('is-show')
        } else {
            $('.c-recruit__tabcontent--blue').removeClass('is-show')
            $('.c-recruit__tabcontent--black').addClass('is-show')
        }
    })

    // Active menu when scroll
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        $('section[id]:not(section[id*="recruit"])').each(function(i) {
            if ($(this).position().top <= scrollDistance + 250) {
                $('.c-header__menuitem.active').removeClass('active');
                $('.c-header__menuitem').eq(i).addClass('active');
            }
        });
    }).scroll();

    // Open & close image modal

    function closeModal(e) {
       if($(e.target).is('.c-messagemodal') || $(e.target).is('.c-imgmodal')) {
        $(this).removeClass('show')
        if($('.c-message__content') && $('.c-message__content').hasClass('show')) {
            $('.c-message__content').removeClass('show')
        }
        $("body").removeClass('u-disablescroll')
       }
    }

    $('.c-work__aboutimg').click(function() {
        var imageUrl = $(this).attr('data-img-url')
        $("body").addClass('u-disablescroll')
        $('.c-imgmodal .c-imgmodal__image img').attr('src', imageUrl)
        $('.c-imgmodal').addClass('show')
    })

    $(".c-modalbtn").click(function() {
        $(this).parent().parent().removeClass('show')
        $("body").removeClass('u-disablescroll')
        if($('.c-message__content').hasClass('show')) {
            $('.c-message__content').removeClass('show')
        }
    })

    // Open message modal
    $('.c-card__avatar').click(function(){
        var messageId = $(this).attr('data-id-modal')
        $(`#${messageId}`).addClass("show")
        $('.c-messagemodal').addClass('show')
        $("body").addClass('u-disablescroll')
    })

    // Click outside close modal
    $('.c-messagemodal').click(closeModal)
    $('.c-imgmodal').click(closeModal)
  });