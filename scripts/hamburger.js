// JAVASCRIPT - HAMBURGER - NAV - BAR - SCRIPT 
// AUTHOR : SUVAJIT KARMAKAR
// DATE OF CREATION: 4.05.23

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar-menu");

hamburger.onclick = function () {
    navBar.classList.toggle("active");
}