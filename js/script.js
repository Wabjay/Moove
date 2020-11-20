var menu = document.getElementById("menu-open");
// var nav = document.getElementById("nav");
var nav = document.getElementById("toggle-menu");

menu.addEventListener("click", function (e) {
  nav.classList.toggle("hide-mobile");

  e.preventDefault();
  if (nav.classList.contains("hide-mobile")) {
    // nav1.style.width = "0vw";
    menu.src = "../images/drop.png";
  } else {
    menu.src = "../images/delete.png";
    // nav1.style.width = "100vw";
  }
});

var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var steps1 = document.getElementById("steps1");
var steps2 = document.getElementById("steps2");

tab2.addEventListener("click", function() {
    // steps2.classList.remove("hide");
    // steps1.classList.add("hide");
    steps1.style.display ="none"
    steps2.style.display ="grid"
    tab2.classList.add("active");
    tab1.classList.remove("active");
  });

tab1.addEventListener("click", function() {
//   steps1.classList.remove("hide");
//   steps2.classList.add("hide");
    steps2.style.display ="none"
    steps1.style.display ="grid"
  tab1.classList.add("active");
  tab2.classList.remove("active");
});
