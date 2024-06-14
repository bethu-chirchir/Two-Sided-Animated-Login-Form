const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const signUpButtons = document.querySelectorAll(".sign-up-btn");
const loginButtons = document.querySelectorAll(".login-btn");
const backLayer = document.querySelector(".back-layer");

signUpButtons.forEach(button => {
    button.addEventListener("click", () => {
        loginForm.classList.remove("active");
        signupForm.classList.add("active");
        backLayer.style.clipPath = "inset(0 0 0 50%)";
    });
});

loginButtons.forEach(button => {
    button.addEventListener("click", () => {
        signupForm.classList.remove("active");
        loginForm.classList.add("active");
        backLayer.style.clipPath = "";
    });
});