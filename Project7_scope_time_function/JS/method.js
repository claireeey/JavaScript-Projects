function get_Date(){
    checkMorning();
}

function checkMorning() {
    if (new Date().getHours() < 13) {
        displayMessage();
    }
}

function displayMessage() {
    document.getElementById("Greeting").innerHTML = "Tu veux de petit dejuner avec moi aujourdhui?";
}
