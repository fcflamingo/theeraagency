$(document).ready(function() {
    'use strict';

    var lookBookItem = $('.lookbook-item');

    var deactivateLookBookItems = function () {
        lookBookItem.removeClass('active');
        lookBookItem.removeClass('inactive');
    };

    $('a.is-toggle-login').on('click', function() {
        $('#login-container').toggleClass('active');
        deactivateLookBookItems();
    });

    lookBookItem.on('click', function() {

        $('#login-container').removeClass('active');

        if($(this).hasClass('active')) {
            deactivateLookBookItems();
        }
        else {
            deactivateLookBookItems();
            $(this).toggleClass('active');
            lookBookItem.not(this).toggleClass('inactive');
        }
    });

    $("#submit").on("click", function(e) {
        e.preventDefault();
    });

    $('.content-header-nav a').on('click', function() {
        $('#splash').add('.navbar').add('body').toggleClass('active');
    });
    $('.logo').on('click', function() {
        $('#splash').add('.navbar').add('body').removeClass('active');
        deactivateLookBookItems();
        $('#login-container').removeClass('active');
    });
});

