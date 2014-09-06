$(document).ready(function() {

    var gridItemHeight = function(tag) {
        var gridItemWidth = $('.grid-item').width();
        $(tag).css({'height': gridItemWidth + 'px'});
    };

    var modalHeight = function(tag) {
        var windowHeight = $(window).height();
        $(tag).css({'height': windowHeight - '60' + 'px'});
    };

    var profileGridItemHeight = function(tag) {
        var profileGridItemWidth = $('.profile-grid-item').width();
        $(tag).css({'height': profileGridItemWidth + 'px'});
    };

    var modelInfoHeight = function(tag) {
        $(tag).css({'height': $(window).height() + 'px'});
    };

    $(window).resize(function() {
        $('.grid-item').each(function(){
            gridItemHeight(this);
        });

        $('.profile-grid-item').each(function(){
            profileGridItemHeight(this);
        });
        $('.model-info').each(function(){
            modelInfoHeight(this);
        });
    });

    TheEraAgency.sizeProfiles = function () {

        // Client Grid Item Sizing (Make Square) //

        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
            setTimeout(function() {
                $('.grid-item').each(function(){
                    gridItemHeight(this);
                });

                $('.modal-content').each(function(){
                    modalHeight(this);
                });

                $('.profile-grid-item').each(function(){
                    profileGridItemHeight(this);
                });

            }, 2000);
        } else {
            $('.grid-item').each(function(){
                gridItemHeight(this);
            });


            $('.profile-grid-item').each(function(){
                profileGridItemHeight(this);
            });
        }

        $('.model-info').each(function(){
            modelInfoHeight(this);
        });


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
