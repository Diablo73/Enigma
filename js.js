function encrypt() {
	var encryptText = "";
	var entext = document.getElementById("entb").value;
	var key = document.getElementById("key").value;
	for (var i = 0; i < entext.length; i++) {
		encryptText += alphabets.charAt((alphabets.indexOf(entext.charAt(i)) + alphabets.indexOf(key.charAt(i % key.length))) % alphabets.length);
	}
	document.getElementById("detb").value = encryptText;
	//console.log("GO!!!");
}

function decrypt() {
	var decryptText = "";
	var detext = document.getElementById("detb").value;
	var key = document.getElementById("key").value;
	for (var i = 0; i < detext.length; i++) {
		decryptText += alphabets.charAt((alphabets.indexOf(detext.charAt(i)) + alphabets.length - alphabets.indexOf(key.charAt(i % key.length))) % alphabets.length);
	}
	document.getElementById("entb").value = decryptText;
	//console.log("GO!!!");
}

var steps = ["Knight [72]", "Lord [96]", "King [127]", "God [321]"];
var slider = document.getElementById("myRange");
var output = document.getElementById("ver");
var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,;:?!()'\"\n\t\\{}[]<>+-*/=@#$%^&_`~";
output.innerHTML = steps[slider.value];		// Display the default slider value
console.log(alphabets);
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = steps[this.value];
	if(this.value == 0) {
		alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,?!()'\"\n";		//72 Chars
	}
	else if(this.value == 1) {
		alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,;:?!()'\"\n\t\\{}[]<>+-*/=@#$%^&_`~";		//96 Chars
	}
	else if(this.value == 2) {
		alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,;:?!()'\"\n\t\\{}[]<>+-*/=@#$%^&_`~☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼";		//127 Chars
	}
	else {
		alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,;:?!()'\"\n\t\\{}[]<>+-*/=@#$%^&_`~☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼⌂₧ƒ⌐¬«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ¹²³■€‚„…†‡ˆ‰Š‹ŒŽ‘’“”–—˜™š›œžŸ¡¢£¤¥¦¨©ª­®¯´¸º¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ";		//321 Chars
	}
	console.log(alphabets);
}
