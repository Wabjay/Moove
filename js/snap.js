
var choose = document.getElementById("choose");
var states = document.getElementById("states");


choose.addEventListener("click", function() {
  if(states.style.display === "none"){
    states.style.display = "block";
  } else {
    states.style.display = "none";
  }
})
