$(document).ready(function(){
    $('.c-mainvisual__slider').slick({
        fade: true,
        speed: 1100,
        infinite: true,
        autoplay: true,
        cssEase: "linear",
        arrows: false,
    });

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
            if ($(this).position().top <= scrollDistance + 250 ) {
                $('.c-header__menuitem.active').removeClass('active');
                $('.c-header__menuitem').eq(i).addClass('active');
            }
        });
    }).scroll();

    // Open & close image modal
    $('.c-work__aboutimg').click(function() {
        $("body").addClass('u-disablescroll')
        $('.c-imgmodal').addClass('show')
       console.log($(this).find('picture img').attr('src')) 
    })

    $(".c-modalbtn").click(function() {
        $(this).parent().parent().removeClass('show')
        $("body").removeClass('u-disablescroll')
    })
  });