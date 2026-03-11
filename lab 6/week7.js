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


let hourId;
let minId;
let secId;
let hour;
let min;
let sec;
document.getElementById("start").addEventListener("click", () => {
    if(!secId){
        secId = setInterval(() => {
            sec++;
            document.getElementById("sec").textContent = sec;
        }, 1000);
    }
    if(sec == 59){
        sec = 0;
        document.getElementById("sec").textContent = sec;
        minId = setInterval(() => {
            min++;
            document.getElementById("min").textContent = min;
            }, 60*1000);
    }
    if(min == 59){
        min = 0;
        document.getElementById("min").textContent = min;
        hourId = setInterval(() => {
            hour++;
            document.getElementById("hour").textContent = hour;
            }, 60*60*1000);
    }
})
