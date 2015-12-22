$(function() {

    var trigger = $('.primary-navigation-and-utility-navigation-trigger-container a');
    var content = $('.primary-navigation-and-utility-navigation-content');

    trigger.click(function(e){

        e.preventDefault();

        content.toggleClass('open');


    });






});