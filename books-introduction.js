$(document).ready(function () {
    //popup-open
    $('.more').bind('click', function (e) {
        var BooksTitleName = $(this).parent('div').siblings('h5').text();
        var BooksIntroduction = $(this).parent('div').siblings('article').text();
        var BooksDefaultPrice = $(this).parent('div').siblings('p').children('del').text();
        var BooksSpecialPrice = $(this).parent('div').siblings('p').children('span').text();
        var BooksLink = $(this).parent('div').eq(0).children('a').attr('href');
        $('body').addClass('scroll-off');
        $('body').append('<section class="popup"></section>');
        $('.popup').append('<div class="popup-content"></div>');
        $('.popup-content').append('<h5>' + BooksTitleName + '</h5>');
        $('.popup-content').append('<article>' + BooksIntroduction + '</article>');
        $('.popup-content').append('<p><del>' + BooksDefaultPrice + '</del><span>' + BooksSpecialPrice + '</span></p>');
        $('.popup-content').append('<div><a href="' + BooksLink + '" target="_blank">購書去</a><a href="#" class="close">關閉</a></div>');
        setTimeout(() => {
            $('.popup').addClass('fadein');
        }, 0);
        return false;
    });
    //popup-close
    $('body').on('click', '.close', function () {
        $('body').removeClass('scroll-off');
        $('.popup').addClass('fadeout');
        setTimeout(() => {
            $('.popup').remove();
        }, 500);
        return false;
    });
});