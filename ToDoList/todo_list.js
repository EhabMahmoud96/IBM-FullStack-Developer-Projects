//Variables
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const clearBtn = document.getElementById('clearCompletedBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('ClearAll');

let tasks = [];

//Functions
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({text: taskText});
        taskInput.value= "";
        displayTasks();
    } else {
        //if the user typed whiteSpace
        alert("You Have To Type Tasks Not White Space")
    }
}

function displayTasks() {
    taskList.innerHTML ="";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
            li.querySelector("input").addEventListener("change",()=> toggleTask(index));
            taskList.appendChild(li);
    });
}


function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearcompletedTasks () {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function clearAllTasks () {
    taskList.innerHTML= "";
}

addTaskBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click",clearcompletedTasks);
clearAllBtn.addEventListener("click",clearAllTasks)