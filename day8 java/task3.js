const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {

    if (taskInput.value === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = taskInput.value;

    li.addEventListener("click", () => {
        li.classList.toggle("done");
    });

    taskList.appendChild(li);

    taskInput.value = "";
});