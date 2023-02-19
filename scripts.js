const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const form = document.querySelector('form');

const passwordArray = {};

function getPassword() {
    passwordArray.passwordInput = password.value;
}

function getPasswordConfirmation() {
    passwordArray.passwordConfirmInput = confirmPassword.value;
}

function checkMatch() {
    if (password.value == confirmPassword.value) {
        password.setAttribute('class', 'match');
        confirmPassword.setAttribute('class', 'match');
    } else {
        password.setAttribute('class', 'error');
        confirmPassword.setAttribute('class', 'error');
    }
}

confirmPassword.addEventListener('change', () => {
    getPassword();
    getPasswordConfirmation();
    checkMatch();
})
password.addEventListener('change', () => {
    getPassword();
    getPasswordConfirmation();
    checkMatch();
})