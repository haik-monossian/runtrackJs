$(document).ready(function() {
    const input = $('#animated-input');

    input.on('focus', function() {
        $(this).stop().animate({
            width: '400px'
        }, 400);
    });

    input.on('blur', function() {
        $(this).stop().animate({
            width: '200px'
        }, 400);
    });
});
