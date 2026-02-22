const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addTask);

function addTask() {

    const taskText = document.getElementById("taskInput").value.trim();
    const taskTimeValue = document.getElementById("taskTime").value;

    if (taskText === "" || taskTimeValue === "") {
        alert("Please enter task and due time!");
        return;
    }

    const dueDate = new Date(taskTimeValue);

    const li = document.createElement("li");
    li.dataset.duedate = dueDate;

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
        li.classList.remove("overdue");
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

    const timeDiv = document.createElement("div");
    timeDiv.className = "time";
    timeDiv.textContent = "Due: " + dueDate.toLocaleString();

    li.appendChild(headerDiv);
    li.appendChild(timeDiv);
    li.appendChild(completeBtn);

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
    document.getElementById("taskTime").value = "";
}

// Single global overdue checker
function checkAllOverdue() {
    const now = new Date();
    const tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(task => {
        const dueDate = new Date(task.dataset.duedate);

        if (now > dueDate && !task.classList.contains("completed")) {
            task.classList.add("overdue");
        }
    });
}

setInterval(checkAllOverdue, 30000);