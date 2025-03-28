function get_Date(){
	if (new Date().getHours()< 13){
	document.getElementById("Greeting").innerHTML = "Tu veux de petit dejuner avec moi aujourdhui?";
	}
}