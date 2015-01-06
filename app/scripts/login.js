$(document).ready(function () {
    var loginContainer = $('#login-container');
    var toggleLogin = $('a.is-toggle-login');

    toggleLogin.on('click', function () {
        loginContainer.toggleClass('active');

    });

    var $form = $('#js-login-form');
    var $confirmCodeInput = $('#js-password');
    var $password = 'models2015';
    $form.on('submit', function (e) {
        e.preventDefault();
        if ($confirmCodeInput.val() == $password) {
            window.location = 'profile.html';
        }
    });
});
