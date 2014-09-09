$(document).ready(function () {
    $('.loader-content').find('.line').addClass('active');
     $(window).on('load', function () {
        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
            setTimeout(function () {
                $('.loader').addClass('is-loaded');
            }, 2000);
        } else {
            $('.loader').addClass('is-loaded');
        }
    });
})
