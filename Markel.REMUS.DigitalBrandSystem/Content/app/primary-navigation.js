$(document).ready(function () {
    $('.menu>a.trigger').on('click', function(e){
        e.preventDefault();
        $(this).closest('li').toggleClass('open');
        $('.overlay').toggleClass('open');
        $('.content').bind('touchmove', function(e){
            e.preventDefault()
        });
    });

    $('.overlay').on('click', function(e){
        $('.menu, .overlay').removeClass('open');
    });
});
