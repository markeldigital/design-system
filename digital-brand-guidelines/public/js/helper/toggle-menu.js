$(function() {

    var trigger = $('.ds-menu-trigger');
    var menus = $('.ds-menu-items');

    trigger.click(function(e){

        e.preventDefault();
        $(this).next('.ds-menu-items').addClass('ds-open');


    });

    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = menus.hasClass("ds-open");
        if (_opened === true && !clickover.hasClass("ds-open")) {
            trigger.click();
        }
    });






});