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

    $('#look').on('click', function() {
        $('#splash').add('.navbar').add('body').toggleClass('active-look');
        $('#splash').removeClass('active-learn');
    });

    $('#learn').on('click', function() {
        $('#splash').add('body').toggleClass('active-learn');
    });


    $('.logo').on('click', function() {
        $('#splash').add('.navbar').add('body').removeClass('active-look');
        $('#splash').add('body').removeClass('active-learn');
        deactivateLookBookItems();
        $('#login-container').removeClass('active');
    });
});

