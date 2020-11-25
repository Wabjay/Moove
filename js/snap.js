
var choose = document.getElementById("choose");
var states = document.getElementById("states");


choose.addEventListener("click", function() {
  if(states.style.display === "none"){
    states.style.display = "block";
  } else {
    states.style.display = "none";
  }
})

e = document.querySelectorAll('#states a');

e.forEach(function(state) {
  // for(i = 0; i < e; i++){
state.addEventListener('click', function() {
 country = state.textContent;
// console.log(country)

  localStorage.setItem("textValue", country);
  console.log(country + " getinput");
})
})

