document.write(10 < 2);

A = "Magnus";
B = "Magnus";
document.write(A === B);

document.write(5 > 2 && 10 > 4);

document.write(5 > 10 || 10 > 4);

document.write(10 == 10);

console.log(16>50) ;

function my_Function() {
    // Action 1: Utilize JavaScript to display NaN.
    // Performing an invalid operation like 0/0 results in NaN.
    document.write("Result of 0/0 (NaN): " + (0/0) + "<br>");

    // Action 2: Utilize isNaN() to display "true".
    // When checking a non-numeric value, isNaN() returns true.
    document.write("isNaN('Hello') returns: " + isNaN("Hello") + "<br>");

    // Action 3: Utilize isNaN() to display "false".
    // When checking a numeric value, isNaN() returns false.
    document.write("isNaN(10) returns: " + isNaN(10) + "<br>");
}

function not_Function() {
	document.getElementById("Not").innerHTML = !(80 > 10);
}
