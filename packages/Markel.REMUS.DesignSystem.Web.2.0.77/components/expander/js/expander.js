$(document).ready(function () {
    $('.expander-trigger').on('click', function (e) {
        toggleExpanderContent();
        e.preventDefault();
    });
});

window.toggleExpanderContent = function () {
    var expanderContent = $('.expander-content');
    var expander = $('.expander');
    expanderContent.toggleClass('hidden');
    expander.toggleClass('open');
};