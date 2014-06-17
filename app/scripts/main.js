$(document).ready(function() {
    'use strict';

    $('a.is-toggle-login').on('click', function() {
        $('#login-container').toggleClass('active');
    });


    $('.lookbook-item').on('click', function() {

        if($(this).hasClass('active')) {
            $('.lookbook-item').removeClass('active');
            $('.lookbook-item').removeClass('inactive');
        } else {
            $('.lookbook-item').removeClass('active');
            $('.lookbook-item').removeClass('inactive');
            $(this).toggleClass('active');
            $('.lookbook-item').not(this).toggleClass('inactive');
        }
    });


});

