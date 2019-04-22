const ico = document.querySelector(".burger");
const nav = document.getElementById("myNav");
ico.addEventListener("click", function() {
  //   ico.classList.toggle("active");
  nav.classList.add("openNav");
});
const arrow = document.getElementById("arrow");

function closeNav() {
  document.getElementById("myNav").classList.remove("openNav");
}
