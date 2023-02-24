$(document).ready(function () {
    //content-scroll
    $('.content-scroll').bind('click', function (e) {
        var HeaderHieght = $('header ul').innerHeight();
        var ContentLinkPosition = $($(this).attr('href')).offset().top;
        $('html, body').stop().animate({ scrollTop: ContentLinkPosition - HeaderHieght }, 1000);
        console.log(HeaderHieght);
        return false;
    });
    //
    ContentMobile();
    //
    $(window).resize(function () { 
        ContentMobile();
    });
    //user-device-monitor
    function ContentMobile() {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            $('.more-link-mobile').show();
            $('.content-link, .more-link').hide();
        } else {
            $('.more-link-mobile').hide();
            $('.content-link, .more-link').show();
        }
    }
});