document.addEventListener("DOMContentLoaded", function () {
    const correctPassword = "ice"; // Set your password here
    const passwordInput = document.getElementById("password-input");
    const passwordOverlay = document.getElementById("password-protect");
    const content = document.getElementById("lost-content");
    const errorMessage = document.getElementById("password-error");

    function checkPassword() {
        if (passwordInput.value === correctPassword) {
            passwordOverlay.style.display = "none"; // Hide the password screen
            content.style.display = "block"; // Show the travel plans
        } else {
            errorMessage.textContent = "Incorrect password. Try again.";
            passwordInput.value = "";
        }
    }

    window.checkPassword = checkPassword;
});