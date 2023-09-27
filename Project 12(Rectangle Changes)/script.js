let rect = document.querySelector("#box")
const position = rect.getBoundingClientRect();
document.addEventListener("mousemove",(e)=>{
    console.log(e.clientX, e.clientY)
})
console.log(position);


rect.addEventListener("mousemove", (anything)=>{
    console.log(anything.clientX)
    let mouseLocation = anything.clientX - position.left;
    console.log(mouseLocation)
    if(mouseLocation < position.width/2) {
        // console.log("You are on left side of the rectangle.")
        rect.style.backgroundColor = "red";
        rect.style.transition = "all 1s"

    }
    else if(mouseLocation > position.width/2){
        rect.style.backgroundColor = "blue"
        rect.style.transition = "all 1s"
    }
}) 

rect.addEventListener("mouseleave",()=>{
    rect.style.backgroundColor = "transparent"
})

