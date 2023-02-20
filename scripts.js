const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');

const passwordWarning = document.querySelector('.p-warning')

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

function warningMessage() {
    if (password.getAttribute('class') == 'error') {
        passwordWarning.textContent = '*Passwords do not match';
    }
    else {
        passwordWarning.textContent = ''
    }
}

confirmPassword.addEventListener('change', () => {
    getPassword();
    getPasswordConfirmation();
    checkMatch();
    warningMessage();
})
password.addEventListener('change', () => {
    getPassword();
    getPasswordConfirmation();
    checkMatch();
    warningMessage();
})