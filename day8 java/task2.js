const passwordInput = document.getElementById("password");
const strength = document.getElementById("strength");
const nameInput = document.getElementById("name");
const greetings = document.getElementById("greetings");


nameInput.addEventListener("input", () => {
    greetings.textContent = `Hello, ${nameInput.value}!`;
});


passwordInput.addEventListener("input", () => {

   
    passwordInput.value = passwordInput.value.replace(/\s/g, "");

    const password = passwordInput.value;


    const hasLength = password.length >= 6;
    const hasNumber = /\d/.test(password);

    
    strength.textContent = (hasLength && hasNumber) ? "STRONG" : "WEAK";
strength.style.color = (hasLength && hasNumber) ? "green" : "red";
});
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");
themeBtn.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
    

});