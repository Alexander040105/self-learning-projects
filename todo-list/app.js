const addTask = document.querySelector('#addTask');
const completedTask = document.querySelector('#completedTask');
const taskInput = document.querySelector('#taskInput');
const taskTable = document.querySelector('#taskTable');

addTask.onclick = appendTask;

function appendTask() {
    var userInput = taskInput.value;
    console.log(userInput);
}
