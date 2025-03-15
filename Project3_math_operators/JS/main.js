function more_Math () {
    var mix_math = (1 + 2) * 30 / 6 - 2;
    document.getElementById("Math").innerHTML = "(1 + 2) * 30 / 6 - 2 =" + mix_math;
}

function modulus_Operator () {
    var simple_math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;
}

function negation_Operator () {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

function increment_Operator () {
    var X = 5;
    X++;
    document.write(X);
}

function decrement_Operator () {
    var X = 5;
    X--;
    document.write(X);
}

window.alert(Math.random() * 89);

function displayMath () {
    var result = Math.round(4.6);
    document.getElementById("Math").innerHTML = "Math.round(4.6) = " + result;
}