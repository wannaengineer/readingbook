$(document).ready(function () {
    $(window).scroll(function () {
        var WindowScrollTop = $(window).scrollTop();
        var MainVisionPosition = $('#categroies-01').offset().top;
        if (WindowScrollTop >= MainVisionPosition) {
            $('header ul').addClass('fill-color');
        } else {
            $('header ul').removeClass('fill-color');
        }
    });
});