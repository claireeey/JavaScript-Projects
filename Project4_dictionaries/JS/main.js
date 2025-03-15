function drink_Menu() {
	var Drink = {
		Category:"Coffee",
		Type:"Latte",
        Size:"Medium",
        Temperature:"Hot",
		Taste:"Creamy",
		Price:4.80,
	};
    delete Drink.Taste;
	document.getElementById("Dictionary").innerHTML = Drink.Taste;
}