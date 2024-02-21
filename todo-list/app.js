const addTask = document.querySelector('#addTask');
const completedTask = document.querySelector('#completedTask');
const taskInput = document.querySelector('#taskInput');
const taskTable = document.querySelector('#taskTable');

addTask.onclick = appendTask;

function appendTask() {
    var userInput = taskInput.value;
    console.log(userInput);
    const li = document.createElement('li');
    const node = document.createTextNode(userInput);
    li.appendChild(node);

    taskTable.appendChild(li);
}
