$(function(){

    var toggleCode = function(link, content){

        $(link).click(function(e){
          e.preventDefault();
          $(this).next($(content)).toggleClass('active');
        });
    };

    toggleCode('.show-markup__link', '.show-markup__content');

});