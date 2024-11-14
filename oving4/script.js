/* Task  1.2 */
console.log('Task  1.2');
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

/* Task  1.3 */
console.log('Task  1.3');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let num of numbers) {
    if (!(num % 3)) {
        console.log("eple");
    } else if (!(num % 5)) {
        console.log("kake");
    } else {
        console.log(num);
    }
}

/* Task  1.4 */
let title = document.getElementById("title");
title.innerText = "Hello, JavaScript!";

let magic = document.getElementById("magic")

/* Task  1.5 */
function changeDisplay () {
    magic.style.display = "none";
}

function changeVisibility () {
    magic.style.display = "block";
    magic.style.visibility = "hidden";
}

function reset () {
    magic.style.display = "block";
    magic.style.visibility = "visible";
}

/* Task 1.6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

let techlist = document.getElementById("tech")

for (technology of technologies) {
    techlist.innerHTML += "<li>" + technology + "</li>"
}