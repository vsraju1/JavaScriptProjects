var istatus = document.querySelector("h5");

var btn = document.querySelector("#add");
var checkStatus = 0;

btn.addEventListener("click", () => {
  if (checkStatus == 0) {
      istatus.innerHTML = "Friends";
      istatus.style.color = "green";
      btn.innerHTML = "Remove Friend"
      checkStatus = 1
  }else{
    istatus.innerHTML = "Strnger";
      istatus.style.color = "red";
      btn.innerHTML = "Add Friend"
      checkStatus = 0
  }
});
