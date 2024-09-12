// document.addEventListener('DOMContentLoaded', function () {
//     const menuIcon = document.getElementById('menu-icon');
//     const menu = document.getElementById('menu');

//     menuIcon.addEventListener('click', function () {
//         menu.classList.toggle('show');
//     });
// });

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', ()=>{
    navMenu.classList.toggle('active');
});