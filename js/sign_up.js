const telephoneRegex = /[0-9]{3}[\s.\-]*[0-9]{3}[\s.\-]*[0-9]{4}/;

// From https://emailregex.com/
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const email = document.getElementById('email');
const telephone = document.getElementById('phone');
const password = document.getElementById('password');
const passwordValidation = document.getElementById('password-validation');

function emailErrorCheck() {
    if (!email.validity.valid) {
	email.setCustomValidity('A valid email address is in the form "johndoe@example.com"');
    }
    else {
	email.setCustomValidity('');
    }
}

function phoneErrorCheck() {
    if (!telephone.validity.valid) {
	telephone.setCustomValidity('A valid phone number is in the form "123-456-7890"');
    }
    else {
	telephone.setCustomValidity('');
    }
}

function passwordErrorCheck() {
    if (password.value.length < 12) {
	password.setCustomValidity('Password must be at least 12 characters long');
    }
    if (!password.validity.valid) {
	password.setCustomValidity('Password must contain at least one number, one lower case letter, and one upper case letter');
    }
    else {
	password.setCustomValidity('');
    }
}

function passwordValidationErrorCheck() {
    if (passwordValidation.value.length < 12) {
	passwordValidation.setCustomValidity('Password must be at least 12 characters long');
    }
    if (!passwordValidation.validity.valid) {
	passwordValidation.setCustomValidity('Password must contain at least one number, one lower case letter, and one upper case letter');
    }
    else {
	passwordValidation.setCustomValidity('');
    }
}

window.addEventListener('load', () => {
    emailErrorCheck();
    phoneErrorCheck();
    passwordErrorCheck();
    passwordValidationErrorCheck();
})
email.addEventListener('input', emailErrorCheck);
telephone.addEventListener('input', phoneErrorCheck);
password.addEventListener('input', passwordErrorCheck);
passwordValidation.addEventListener('input', passwordValidationErrorCheck);
