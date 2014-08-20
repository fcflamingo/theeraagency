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
        deactivateContactOptions();
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

    $('#look').add('.overlay').on('click', function() {
        $('#splash').add('.navbar').add('body').toggleClass('active-look');
        $('#splash').removeClass('active-learn');
        $('#login-container').removeClass('hide');
    });

    $('.js-toggle-contact').on('click', function() {
        $('#splash').add('body').toggleClass('active-learn');
        $('.navbar').toggleClass('active-look');
    });

    $('.js-toggle-social').on('click', function() {
        $('.navbar').toggleClass('active-look');
        $('#social-wrap').addClass('active');
        $('html, body').animate({ scrollTop: $('body').offset().top}, 500);
    });

    $('.back').on('click', function() {
        $('#splash').add('.navbar').add('body').removeClass('active-look');
        $('#splash').add('body').removeClass('active-learn');
        deactivateLookBookItems();
        deactivateContactOptions();
        $('#login-container').removeClass('active');
        $('#profiles-wrap').removeClass('active');
        $('#social-wrap').removeClass('active');
        $('#login-container').removeClass('hide');
        $('#lookbook').add('#splash').removeClass('logged-in');
    });

    $('.logo').on('click', function() {
        $('#splash').add('.navbar').add('body').removeClass('active-look');
        $('#splash').add('body').removeClass('active-learn');
        deactivateLookBookItems();
        deactivateContactOptions();
        $('#login-container').removeClass('active');
        $('#profiles-wrap').removeClass('active');
        $('#social-wrap').removeClass('active');
        $('#login-container').addClass('hide');
        $('#lookbook').add('#splash').removeClass('logged-in');
    });

    $('#login').on('click', function(e) {
        e.preventDefault();
        window.location='http://fcflamingo.github.io/mymodelmgmt/profiles-home.html';
//        $('#profiles-wrap').addClass('active');
//        $('#login-container').removeClass('active');
//        $('#login-container').addClass('hide');
//        $('body').removeClass('active-look');
//        $('#lookbook').add('#splash').addClass('logged-in');
    });
    $('#profiles-wrap').addClass('active');
    $('.profile-overlay').addClass('active');

    // Client Grid Item Sizing (Make Square) //

    var gridItemHeight = function(tag) {
        var gridItemWidth = $('.grid-item').width();
        $(tag).css({'height': gridItemWidth + 'px'});
    };
    $('.grid-item').each(function(){
        gridItemHeight(this);
    });
    $(window).resize(function() {
        $('.grid-item').each(function(){
            gridItemHeight(this);
        });
    });


    $('.grid-item').on('click', function(e) {
        e.preventDefault();
        window.location='http://fcflamingo.github.io/mymodelmgmt/profiles-individual.html';
//        $('.profile-overlay').addClass('active');
//        $('html, body').addClass('noScroll');
//        $('html, body').animate({ scrollTop: $('body').offset().top}, 500);
//        $('.profile-grid-item').each(function(){
//            profileGridItemHeight(this);
//        });
    })

    $('.profile-grid-item').on('mouseenter', function() {
        $('.profile-grid-item').not(this).addClass('is-not-hovered');
    });
    $('.profile-grid-item').on('mouseleave', function() {
        $('.profile-grid-item').not(this).removeClass('is-not-hovered');
    });

    var profileGridItemHeight = function(tag) {
        var gridItemWidth = $('.profile-grid-item').width();
        $(tag).css({'height': gridItemWidth + 'px'});
    };

    $('.profile-grid-item').each(function(){
        profileGridItemHeight(this);
    });
    $(window).resize(function() {
        $('.profile-grid-item').each(function(){
            profileGridItemHeight(this);
        });
    });


    var modelInfoHeight = function(tag) {
        var windowHeight = $(window).height();
        $(tag).css({'height': windowHeight + 'px'});
    };

    $('.model-info').each(function(){
        modelInfoHeight(this);
    });

    $(window).resize(function() {
        $('.model-info').each(function(){
            modelInfoHeight(this);
        });
    });


//    $('.is-close-overlay').on('click', function(e) {
//        $('.profile-overlay').removeClass('active');
//        $('html, body').removeClass('noScroll');
//    });

    // Client Grid Item Sizing (Make Square) //

});

