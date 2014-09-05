$(document).ready(function () {
    var loginContainer = $('#login-container');
    var login = $('#login');
    var toggleLogin = $('a.is-toggle-login');

    var contactOption = $('.contact-option');

    var deactivateContactOptions = function () {
        contactOption.removeClass('active');
        contactOption.removeClass('inactive');
    };

    toggleLogin.on('click', function() {
        loginContainer.toggleClass('active');

        deactivateContactOptions();
    });

    login.on('click', function(e) {
        e.preventDefault();
        window.location='profiles-home.html';
    });



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
