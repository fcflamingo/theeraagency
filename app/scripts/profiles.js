$(document).ready(function() {

    var gridItemHeight = function() {
        var $gridItem = $('.grid-item')
        var gridItemWidth = $gridItem.width();
        $gridItem.css({'height': gridItemWidth + 'px'});
    };

    var modalHeight = function() {
        var windowHeight = $(window).height();
        $('.modal-content').css({'height': windowHeight - '60' + 'px'});
    };

    var profileGridItemHeight = function() {
        var $profile = $('.profile-grid-item')
        var profileGridItemWidth = $profile.width();
        $profile.css({'height': profileGridItemWidth + 'px'});
    };

    var modelInfoHeight = function() {
        $('.model-info').css({'height': $(window).height() + 'px'});
    };

    $(window).resize(function() {
        gridItemHeight()
        profileGridItemHeight()
        modelInfoHeight()
    });

    TheEraAgency.sizeProfiles = function () {

        // Client Grid Item Sizing (Make Square) //

        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
            setTimeout(function() {
                gridItemHeight()
                modalHeight()
                profileGridItemHeight()
            }, 2000);
        } else {
            gridItemHeight()
            profileGridItemHeight()
        }

    }




    TheEraAgency.initProfiles = function () {

        var $profile = $('.profile-grid-item')
        $profile.on('mouseenter', function() {
            $('.profile-grid-item').not(this).addClass('is-not-hovered');
        });
        $profile.on('mouseleave', function() {
            $('.profile-grid-item').not(this).removeClass('is-not-hovered');
        });

        $('#profiles-wrap').addClass('active');
        $('.profile-overlay').addClass('active');


    }






})
