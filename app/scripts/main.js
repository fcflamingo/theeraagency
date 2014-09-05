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
    var lookBookItem = $('.lookbook-item');
    var gridItem = $('.grid-item');
    var profileGridItem = $('.profile-grid-item');
    var modelInfo = $('.model-info');
    var splash = $('#splash');
    var toggleLogin = $('a.is-toggle-login');
    var loginContainer = $('#login-container');
    var login = $('#login');

    var deactivateLookBookItems = function () {
        lookBookItem.removeClass('active');
        lookBookItem.removeClass('inactive');
    };

    toggleLogin.on('click', function() {
        loginContainer.toggleClass('active');
        deactivateLookBookItems();
        deactivateContactOptions();
    });

    lookBookItem.on('click', function() {

        loginContainer.removeClass('active');

        if($(this).hasClass('active')) {
            deactivateLookBookItems();
        }
        else {
            deactivateLookBookItems();
            $(this).toggleClass('active');
            lookBookItem.not(this).toggleClass('inactive');
        }
    });

    var contactOption = $('.contact-option');

    var deactivateContactOptions = function () {
        contactOption.removeClass('active');
        contactOption.removeClass('inactive');
    };

    contactOption.on('click', function() {

        if($(this).hasClass('active')) {
            deactivateContactOptions();
        }
        else {
            deactivateContactOptions();
            $(this).toggleClass('active');
            contactOption.not(this).toggleClass('inactive');
        }
    });

    $('.look').add('.overlay').on('click', function() {
        splash.add('.navbar').add('body').addClass('active-look');
        splash.removeClass('active-learn');
        loginContainer.removeClass('hide');
    });

    $('.js-toggle-contact').on('click', function() {
        splash.add('body').removeClass('active-look');
        $('.navbar').addClass('active-look');
        splash.add('body').addClass('active-learn');
        $('.navbar').removeClass('hide');
    });

    $('.js-toggle-social').on('click', function() {
        $('.navbar').toggleClass('active-look');
        $('html, body').animate({ scrollTop: $('body').offset().top}, 500);
    });

    $('.back').on('click', function() {
        splash.add('.navbar').add('body').removeClass('active-look');
        splash.add('body').removeClass('active-learn');
        deactivateLookBookItems();
        deactivateContactOptions();
        loginContainer.removeClass('active');
        $('#profiles-wrap').removeClass('active');
        $('#social-wrap').removeClass('active');
        loginContainer.removeClass('hide');
        $('#lookbook').add(splash).removeClass('logged-in');
    });

    $('.logo').on('click', function() {
        splash.add('.navbar').add('body').removeClass('active-look');
        splash.add('body').removeClass('active-learn');
        deactivateLookBookItems();
        deactivateContactOptions();
        loginContainer.removeClass('active');
        $('#profiles-wrap').removeClass('active');
        $('#social-wrap').removeClass('active');
        loginContainer.addClass('hide');
        $('#lookbook').add(splash).removeClass('logged-in');
    });

    login.on('click', function(e) {
        e.preventDefault();
        window.location='profiles-home.html';
    });

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

    $('.loader-content').find('.line').addClass('active');

    $(window).on('load', function() {
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
            setTimeout(function() {
                $('.loader').addClass('is-loaded');
            }, 2000);
        } else {
            $('.loader').addClass('is-loaded');
        }
    });

    $('a.profile-grid-item').colorbox({rel:'gallery', transition:'fade', maxWidth:'95%', maxHeight:'95%'});

});

