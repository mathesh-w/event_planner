document.getElementById('form').addEventListener('submit', function(event) {
     event.preventDefault()// Prevents form submission and page reload

    // Getting data form 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Storing data in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Sign-up successful");

    window.location.href = "login.html";
});


