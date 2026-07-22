const nameInput = document.getElementById("name");
const greetings = document.getElementById("greetings");

nameInput.addEventListener("input", () => {
  greetings.textContent= `Hello, ${nameInput.value}!`;
});