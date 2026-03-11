const message = document.querySelector("#message");
const button = document.querySelector("#changeText");

button.addEventListener('click', function(){
    message.textContent = "Hello, JavaScript!";
});

const box = document.getElementById(box);
box.addEventListener('click', function(){
    this.style.backgroundColor = 'red';
});
