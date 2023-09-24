const buttons = document.querySelectorAll(".button");

console.log(buttons);

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener("click", function(e){
        document.querySelector("body").style.backgroundColor = e.target.id;
    })
})

