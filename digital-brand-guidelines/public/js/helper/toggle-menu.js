$(function() {

    var trigger = $('.ds-menu-trigger');
    var menu = $('.ds-menu-items');


    $(document).click(function() {
        menu.removeClass('ds-open');

    });


    trigger.click(function(e){

        e.preventDefault();
        e.stopPropagation();

       var alreadyOpen = $(this).next(menu).hasClass('ds-open');

        $('.ds-open').removeClass('ds-open');

            if(!alreadyOpen){

                $(this).next(menu).addClass('ds-open');

            }

    });

});