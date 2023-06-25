// Create the login function here.
function login() {

    playername = document.getElementById("playername").value;
    localStorage.setItem("playername", playername);
    
    window.location = "gamepage.html";
    }
