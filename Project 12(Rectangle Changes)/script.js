let rect = document.querySelector("#box")
const position = rect.getBoundingClientRect();
console.log(position);


rect.addEventListener("mousemove", (anything)=>{
    let mouseLocation = anything.clientX - position.left;
    if(mouseLocation < position.width/2) {
        // console.log("You are on left side of the rectangle.")
        rect.style.backgroundColor = "red";
    }
    else if(mouseLocation > position.width/2){
        rect.style.backgroundColor = "blue"
    }
    else{
        rect.style.backgroundColor = "transparent"
    }
    
}) 

