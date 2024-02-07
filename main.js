function toggleMenu() {
  const menu = document.querySelector(".menu-link");
  const icon = document.querySelector(".sm-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


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
