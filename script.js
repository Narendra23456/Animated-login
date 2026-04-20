const loginBtn = document.getElementById("loginBtn");
const username = document.getElementById("username");
const loginBox = document.getElementById("loginBox");
const welcomeBox = document.getElementById("welcomeBox");
const welcomeText = document.getElementById("welcomeText");

loginBtn.addEventListener("click", function () {
    if (username.value.trim() === "") {
        alert("Please enter username!");
        return;
    }

    // Hide login & show welcome
    loginBox.style.transform = "scale(0)";

    setTimeout(() => {
        loginBox.style.display = "none";
        welcomeBox.style.display = "block";
        welcomeBox.style.transform = "scale(1)";
        welcomeText.textContent = username.value;
    }, 500);
});