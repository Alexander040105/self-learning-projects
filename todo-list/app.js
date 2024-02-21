const addTask = document.querySelector('#addTask');
const completedTask = document.querySelector('#completedTask');
const taskInput = document.querySelector('#taskInput');
const taskTable = document.querySelector('#taskTable');
let li;

addTask.onclick = appendTask;
completedTask.onclick = delTask;

function appendTask() {
    var userInput = taskInput.value;
    console.log(userInput);
    li = document.createElement('li');
    const node = document.createTextNode(userInput);
    li.appendChild(node);
    taskTable.appendChild(li);
    taskInput.value = '';
}

function delTask() {
    const selectedLi = taskTable.querySelector('li');
    if (selectedLi) {
        taskTable.removeChild(selectedLi);
    }
}
