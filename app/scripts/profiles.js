$(document).ready(function() {

    var gridItemHeight = function() {
        var $gridItem = $('.grid-item');
        var gridItemWidth = $gridItem.width();
        $gridItem.css({'height': gridItemWidth + 'px'});
    };

    var modalHeight = function() {
        var windowHeight = $(window).height();
        $('.modal-content').css({'height': windowHeight - '60' + 'px'});
    };

    var setProfileGridItemHeight = function() {
        var $profile = $('.profile-grid-item');
        $("profile-grid").imagesLoaded(function () {
            var profileGridItemWidth = $profile.width();
            $profile.height(profileGridItemWidth);
        })
    };

    var modelInfoHeight = function() {
        $('.model-info').css({'height': $(window).height() + 'px'});
    };

    $(window).resize(function() {
        gridItemHeight();
        setProfileGridItemHeight();
        modelInfoHeight();
    });

    TheEraAgency.sizeProfiles = function () {

        // Client Grid Item Sizing (Make Square) //

        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
            setTimeout(function() {
                gridItemHeight();
                modalHeight();
                setProfileGridItemHeight();
            }, 2000);
        } else {
            gridItemHeight();
            setProfileGridItemHeight();
        }

    };




    TheEraAgency.initProfiles = function () {

        var $profile = $('.profile-grid-item');
        $profile.on('mouseenter', function() {
            $('.profile-grid-item').not(this).addClass('is-not-hovered');
        });
        $profile.on('mouseleave', function() {
            $('.profile-grid-item').not(this).removeClass('is-not-hovered');
        });

        $('#profiles-wrap').addClass('active');
        $('.profile-overlay').addClass('active');

        $('a.profile-grid-item').colorbox({
            rel:'gallery',
            transition:'fade',
            maxWidth:'95%',
            maxHeight:'95%',
            photo: true
        });
    }






});
