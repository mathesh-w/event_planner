
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault()

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // getting data from the local storage
    const enteredEmail = document.getElementById("email").value.toLowerCase();
    const enteredPassword = document.getElementById("password").value;

    if (enteredEmail === storedEmail.toLowerCase()) {
        
        if (enteredPassword === storedPassword) {
             alert("Login successfull");
             window.location.href = "index.html";
    } else {
        alert("Incorrect password");
    }

    } else {
        alert("Incorrect email");
    }
});
