(function () {

// $(document).ready(function(){
//   $('.your-class').slick({
//     setting-name: setting-value
//   });
// });

$('.slides').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
        breakpoint: 1300,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
        }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

$('.slides--clients').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
        responsive: [{
        breakpoint: 970,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
        }
        }, {
        breakpoint: 790,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
        }, {
        breakpoint: 670,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }]
});


$('.slides--portfolio').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true
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
