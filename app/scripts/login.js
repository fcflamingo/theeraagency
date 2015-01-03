$(document).ready(function () {
    var loginContainer = $('#login-container');
    var login = $('#login');
    var toggleLogin = $('a.is-toggle-login');

    toggleLogin.on('click', function() {
        loginContainer.toggleClass('active');

    });

    login.on('click', function(e) {
        e.preventDefault();
        window.location='profile.html';
    });


})
