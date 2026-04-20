const loginBtn = document.getElementById("loginBtn");
const username = document.getElementById("username");
const prefix = document.getElementById("prefix");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const loginBox = document.getElementById("loginBox");
const welcomeBox = document.getElementById("welcomeBox");
const welcomeText = document.getElementById("welcomeText");
const themeToggle = document.getElementById("themeToggle");

// FORM SUBMIT
loginBtn.addEventListener("click", () => {
    if (
        username.value === "" ||
        prefix.value === "" ||
        email.value === "" ||
        password.value === "" ||
        confirmPassword.value === ""
    ) {
        alert("Please fill all fields!");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        return;
    }

    // ANIMATION
    loginBox.style.transform = "scale(0)";

    setTimeout(() => {
        loginBox.style.display = "none";
        welcomeBox.style.display = "block";
        welcomeText.textContent =
            prefix.value + " " + username.value + " (" + email.value + ")";
    }, 500);
});

// DARK / LIGHT MODE
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    themeToggle.textContent =
        document.body.classList.contains("light") ? "☀️" : "🌙";
});