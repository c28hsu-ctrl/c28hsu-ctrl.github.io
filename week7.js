function countdown(){
    for(let i =3; i>=0; i--){
        id = setTimeout(function() {
            if (i==0){
                console.log("Go!");
            }else{
                 console.log(i);
            }
        }, (3-i)*1000);
    }
}

let timerId;
let count = 0;
document.getElementById("start").addEventListener("click", () => {
    if(!timerId){
        timerId = setInterval(() => {
            count++;
            document.getElementById("counter").textContent = count;
        }, 1000);
    }
})
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
});
document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    document.getElementById("counter").textContent = count;
});
