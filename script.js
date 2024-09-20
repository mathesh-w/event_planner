/* this for index.html */
var menu = document.querySelector('.menu');
var menuList = document.querySelector('nav ul');

menu.addEventListener('click', () => {
    menuList.classList.toggle('showmenu');
})



