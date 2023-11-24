var con = document.querySelector(".container")
var icons = document.querySelector("i")

con.addEventListener('dblclick', () => {
    icons.style.transform = "translate(-50%, -50%) scale(1)"
    icons.style.opacity = 0.8
    setTimeout(() => {
        icons.style.opacity = 0
        }, 1000)
    setTimeout(() => {
    icons.style.transform = "translate(-50%, -50%) scale(0)"
    }, 2000)
})