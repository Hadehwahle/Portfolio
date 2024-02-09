function toggleMenu() {
  const menu = document.querySelector(".menu-link");
  const icon = document.querySelector(".sm-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const body = document.querySelector("body");
const btn = document.getElementById("btn_one");
const icon = document.getElementById("moon");
function changeTheme() {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    btn.style.backgroundColor = "#fff";
    icon.style.color = "#0d151c";
} else {
    btn.style.backgroundColor = "#0d151c";
    icon.style.color = "#fff";
  }
}
btn.addEventListener("click", changeTheme);

let prevScrollpos = window.scrollY;
window.onscroll = function() {
let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("lg-nav").style.top = "0";
    document.getElementById("sm-nav").style.top = "0";
  } else {
    document.getElementById("lg-nav").style.top = "-130px";
    document.getElementById("sm-nav").style.top = "-130px";
  }
  prevScrollpos = currentScrollPos;
}
