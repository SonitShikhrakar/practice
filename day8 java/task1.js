let count = 0;

const counter = document.getElementById("count");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
    count++;
    counter.textContent = count;
});