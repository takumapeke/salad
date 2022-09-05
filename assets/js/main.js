$(function(){
    // スムーススクロール
    $('a[href^="#"]:not([href="#"])').click(function(){
        var id = $(this).attr('href');
        var headerH = $('#js-header').innerHeight();
        var position = $(id).offset().top-headerH;
        $('html,body').animate({scrollTop: position},300);
        return false;
    });

    // ページトップ
    $('#js-top').click(function(){
        $('html,body').animate({scrollTop: 0},300);
        return false;
    });

    // プライバシーポリシー
    $('#js-privacy').click(function(){
        $('#js-modal').addClass('privacy--open');
        $('body').addClass('is-fixed');
        return false;
    });
    $('#js-close').click(function(){
        $('#js-modal').removeClass('privacy--open');
        $('body').removeClass('is-fixed');
    });
});