function My_First_Function() {
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
}

function My_Second_Function() {
    var str = "hi there";
    str += "just for fun"
    document.getElementById("Button_Text").innerHTML = str;
}

// Get the element with id 'message'
var element = document.getElementById("message");
// Concatenate a string using += operator
element.innerHTML += "And this is the added text!";
