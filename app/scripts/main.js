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


    var profilesWrap = $('#profiles-wrap');

    $("#submit").on("click", function(e) {
        e.preventDefault();
        profilesWrap.addClass('active');
        $.get("profiles-home.html",function(data){
            profilesWrap.append(data);
            setTimeout(function() {
                $('#profiles').addClass('active');
            }, 400);
        });
    });
});

