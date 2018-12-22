(function () {
$('.sandwich').on('click',function() {
    $(this).toggleClass('sandwich--active');
    $('.header-nav_list').toggleClass('header-nav_list--active');
});

$('#linkFocus').on('click', function () {
$('html').animate(
    {scrollTop: $('#inputFocus').offset().top}, 1200);
    $('#inputFocus').focus();
});

})();