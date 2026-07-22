const passwordInput = document.getElementById("password");
const strength = document.getElementById("strength");
const nameInput = document.getElementById("name");
const greetings = document.getElementById("greetings");

nameInput.addEventListener("input", () => {

    
    nameInput.value = nameInput.value.replace(/\s/g, "");

    greetings.textContent = `Hello, ${nameInput.value}!`;
});

passwordInput.addEventListener("input", () => {

    
    passwordInput.value = passwordInput.value.replace(/\s/g, "");

    const password = passwordInput.value;

  
    const hasLength = password.length >= 6;
    const hasNumber = /\d/.test(password);

    if (hasLength && hasNumber) {
        strength.textContent = "STRONG";
        strength.style.color = "green";
    } else {
        strength.textContent = "WEAK";
        strength.style.color = "red";
    }
});