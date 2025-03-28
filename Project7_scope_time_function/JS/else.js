function age_Function() {
	age = document.getElementById("Age").value;
	if (age >= 18) {
		Vote = "you are old enough to vote!";
	}
	else {
		Vote = "you arent old enough to vote!";
	}
	document.getElementById("How_old_are_you?").innerHTML = Vote;
}