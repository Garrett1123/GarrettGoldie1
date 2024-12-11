// script.js

// Display a welcome message when the page is loaded
window.onload = function() {
    alert("Welcome to the Kentucky Wildcats Fan Page!");
}

// Function to toggle player details
function togglePlayerDetails(playerId) {
    var details = document.getElementById(playerId);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// Function to change background color when a button is clicked
function changeBackgroundColor() {
    document.body.style.backgroundColor = "#0033A0"; // Kentucky Wildcats Blue
}
