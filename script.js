const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addTask);

function addTask() {

    const taskText = document.getElementById("taskInput").value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const headerDiv = document.createElement("div");
    headerDiv.className = "task-header";

    const span = document.createElement("span");
    span.textContent = taskText;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Mark Done";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Mark as completed
    completeBtn.onclick = function() {
        li.classList.add("completed");
        span.textContent = taskText + " (Completed)";
        completeBtn.disabled = true;
        completeBtn.textContent = "Completed";
    };

    // Delete task
    deleteBtn.onclick = function() {
        li.remove();
    };

    headerDiv.appendChild(span);
    headerDiv.appendChild(deleteBtn);

    li.appendChild(headerDiv);
    li.appendChild(completeBtn);

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
}