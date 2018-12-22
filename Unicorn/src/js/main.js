(function () {

$('.slides').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
        breakpoint: 1300,
        settings: {
            slidesToShow: 2,

        }
        }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,

        }
    }]
});

$('.slides--clients').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
        responsive: [{
        breakpoint: 970,
        settings: {
            slidesToShow: 5,

        }
        }, {
        breakpoint: 790,
        settings: {
            slidesToShow: 4,

        }
        }, {
        breakpoint: 670,
        settings: {
            slidesToShow: 3,

        }
    }]
});


$('.slides--portfolio').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
        responsive: [{
        breakpoint: 1500,
        settings: {
            slidesToShow: 3,

        }
        }, {
        breakpoint: 790,
        settings: {
            slidesToShow: 2,

        }
        }, {
        breakpoint: 670,
        settings: {
            slidesToShow: 2,

        }
    }]
});

$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
        $('#toTop').fadeOut();
        }
    });
        $('#toTop').click(function() {
            $('html').animate({scrollTop:0},800);
        });
});

$('#blur').on('click', function () {
    $('.slides--portfolio_img').toggleClass('blur');
});

})();
