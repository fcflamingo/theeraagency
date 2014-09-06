$(document).ready(function() {
    'use strict';

    // SCALE CORRECTLY IN LANDSCAPE MODE //

    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
        var viewportmeta = document.querySelector('meta[name="viewport"]');
        if (viewportmeta) {
            viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
            document.body.addEventListener('gesturestart', function () {
                viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
            }, false);
        }
    }


    $('.modal-open').add('.modal-content').on('click', function() {
        $('#myModal').modal('toggle');
    });

    var safariWindowHeight = function(tag) {
        $(tag).css({'height': windowHeight + 'px'});
    };

    var activeForm = $('.contact-option .active');

    activeForm.each(function () {
        setTimeout(function() {
            safariWindowHeight(this);
        }, 100);
    });

    $(window).resize(function() {
        activeForm.each(function(){
            setTimeout(function() {
                safariWindowHeight(this);
            }, 100);
        });
    });

});

