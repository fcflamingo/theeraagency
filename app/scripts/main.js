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

    var windowHeight = $(window).height();
    var gridItem = $('.grid-item');
    var profileGridItem = $('.profile-grid-item');
    var modelInfo = $('.model-info');

    $('#profiles-wrap').addClass('active');
    $('.profile-overlay').addClass('active');
    $('#social-wrap').addClass('active');


    // Client Grid Item Sizing (Make Square) //

    var gridItemHeight = function(tag) {
        var gridItemWidth = gridItem.width();
        $(tag).css({'height': gridItemWidth + 'px'});
    };

    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        setTimeout(function() {
            gridItem.each(function(){
                gridItemHeight(this);
            });
        }, 2000);
    } else {
        gridItem.each(function(){
            gridItemHeight(this);
        });
    }

    $(window).resize(function() {
        gridItem.each(function(){
            gridItemHeight(this);
        });
    });

    profileGridItem.on('mouseenter', function() {
        profileGridItem.not(this).addClass('is-not-hovered');
    });
    profileGridItem.on('mouseleave', function() {
        profileGridItem.not(this).removeClass('is-not-hovered');
    });

    var modalHeight = function(tag) {
        var windowHeight = $(window).height();
        $(tag).css({'height': windowHeight - '60' + 'px'});
    };

    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        setTimeout(function() {
            $('.modal-content').each(function(){
                modalHeight(this);
            });
        }, 2000);
    }

    var profileGridItemHeight = function(tag) {
        var profileGridItemWidth = profileGridItem.width();
        $(tag).css({'height': profileGridItemWidth + 'px'});
    };

    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        setTimeout(function() {
            profileGridItem.each(function(){
                profileGridItemHeight(this);
            });
        }, 2000);
    }  else {
        profileGridItem.each(function(){
            profileGridItemHeight(this);
        });
    }

    $(window).resize(function() {
        profileGridItem.each(function(){
            profileGridItemHeight(this);
        });
    });

    var modelInfoHeight = function(tag) {
        $(tag).css({'height': windowHeight + 'px'});
    };

    modelInfo.each(function(){
        modelInfoHeight(this);
    });

    $(window).resize(function() {
        modelInfo.each(function(){
            modelInfoHeight(this);
        });
    });

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

