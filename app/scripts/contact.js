$(document).ready(function () {

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

})
