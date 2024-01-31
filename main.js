function toggleMenu() {
    const menu = document.querySelector(".menu-link");
    const icon = document.querySelector(".sm-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("lg-nav").style.backgroundColor = " #edecec";
    document.getElementById("sm-nav").style.backgroundColor = " #edecec";
  } else {
    document.getElementById("lg-nav").style.backgroundColor = " #e0dfdf";
    document.getElementById("sm-nav").style.backgroundColor = " #e0dfdf";
  }
}