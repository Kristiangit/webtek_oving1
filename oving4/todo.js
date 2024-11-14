
function addTask() {
    // console.log("adeded");
    const newTask = document.createElement("li");
    const newCheck = document.createElement("input");
    newCheck.type = 'checkbox';
    newTask.append(newCheck, document.createTextNode(textInput.value));
    if (list.childNodes.length > 0){
        // console.log(list.childNodes);
        list.insertBefore(newTask, list.childNodes[0]);
    }
    else {
        list.appendChild(newTask);
    }

    tasks.unshift({name: textInput.value, completed: false});
    textInput.value = "";

    updateOutput();
    // console.log(tasks);
}
function updateOutput(){
    let total = 0;
    for (let index = 0; index < tasks.length; index++) {
        
        if (tasks[index].completed){
            // console.log(tasks[index]);
            total += 1;
        }
    }
    output.innerText = `${total}/${tasks.length} completed`;
}

const list = document.getElementById("task-list");
const textInput = document.getElementById("task-input");
const button = document.getElementById("button");
const output = document.getElementById("output");
let tasks = [];

document.onload = textInput.focus();

button.addEventListener('click', addTask);
list.addEventListener('click', function() {
    for (let index = 0; index < list.childNodes.length; index++){
        var child = list.childNodes[index];
        // console.log(child.childNodes);
        if (child.childNodes[0].checked){
            child.style = "text-decoration: line-through;";
            tasks[index].completed = true;
        }
        else {
            tasks[index].completed = false;
            child.style = "";
        }
    }
    updateOutput();
});