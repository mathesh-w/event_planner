/* this for index.html */
var menu = document.querySelector('.menu');
var menuList = document.querySelector('nav ul');

menu.addEventListener('click', () => {
    menuList.classList.toggle('showmenu');
})



/* this register page */

var form = document.getElementById('register-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // storing data in local storage 
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Sign-up successful")
});



