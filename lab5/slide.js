
let a ="Hello";
console.log("Hello World");
alert("Nice day today");

const buttonA = document.querySelector("#button_A");
const headingA = document.getElementById("heading_A");

buttonA.addEventListener('click', function() {
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice to see you!`);
    headingA.textContent = `Welcome ${name}`;
});


const textbox= document.querySelector("#textBox");
const output = document.querySelector("#output");
output.textContent = "You typed:";
textbox.addEventListener("keydown", (event) =>{
    output.textContent = `${output.textContent} ${event.key}`;
});

const buttonB = document.querySelector("#button_B");
function greet(){
    const name = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello! ${name}, nice to see you!`;
}
buttonB.addEventListener("click", greet);