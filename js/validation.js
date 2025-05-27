"use strict";
var _a;
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["NAME"] = "Name must be at least 3 characters.";
    ErrorMessages["EMAIL"] = "Invalid email format.";
    ErrorMessages["PASSWORD"] = "Password must be at least 8 characters.";
    ErrorMessages["CONFIRM"] = "Passwords do not match.";
})(ErrorMessages || (ErrorMessages = {}));
function showError(id, message) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = message;
    }
}
function clearErrors() {
    const errorIds = ["nameError", "emailError", "passwordError", "confirmPasswordError"];
    errorIds.forEach(id => {
        const element = document.getElementById(id);
        if (element)
            element.textContent = "";
    });
}
(_a = document.getElementById("registrationForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    const user = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmPassword").value,
    };
    let isValid = true;
    clearErrors();
    const namePattern = /^[A-Za-z\s]+$/;
    if (user.name.length < 3 || !namePattern.test(user.name)) {
        showError("nameError", "Name must be at least 3 characters and contain only letters.");
        isValid = false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(user.email)) {
        showError("emailError", ErrorMessages.EMAIL);
        isValid = false;
    }
    if (user.password.length < 8) {
        showError("passwordError", ErrorMessages.PASSWORD);
        isValid = false;
    }
    if (user.password !== user.confirmPassword) {
        showError("confirmPasswordError", ErrorMessages.CONFIRM);
        isValid = false;
    }
    if (isValid) {
        alert("Form submitted successfully!");
    }
});
