var con = document.querySelector("#container");
var customCursor = document.querySelector("#cursor");
var heading = document.querySelector("h1");

var rect = heading.getBoundingClientRect();
console.log(rect.x );
console.log(rect.width);

console.log(rect.x+rect.width)

console.log(heading);

con.addEventListener("mousemove", (dets) => {
    //  console.log(dets.clientX > rect.x & (detz.clientX < (rect.x+rect.width)));
    
  if ((dets.clientX > rect.x) & (dets.clientX < (rect.x+rect.width)) & (dets.clientY > rect.y) & (dets.clientY < (rect.y+rect.height))) {
    customCursor.style.transform = "scale(4)"
    customCursor.style.left = dets.x + "px";
    customCursor.style.top = dets.y + "px";
  }else {
    customCursor.style.transform = "scale(1)"
    customCursor.style.left = dets.x + "px";
    customCursor.style.top = dets.y + "px";
  }
});

// con.addEventListener("mousemove", (dets) => {
//     console.log(rect)
//     console.log(dets)
//     customCursor.style.left = dets.x + "px";
//     customCursor.style.top = dets.y + "px";
// })
