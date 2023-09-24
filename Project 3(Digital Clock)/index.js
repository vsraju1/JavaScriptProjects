const clock = document.getElementById("time");

let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString()); 
    clock.innerHTML = date.toTimeString();
},1000)