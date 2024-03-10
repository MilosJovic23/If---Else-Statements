//

var boja = prompt("Unestie boju dugmeta").toLowerCase();

var dugme = document.getElementById("button");

if (boja == "crvena") {
	dugme.style.backgroundColor = "red";
} else if (boja == "plava") {
	dugme.style.backgroundColor = "blue";
} else {
	dugme.style.backgroundColor = "green";
}
//
var bojaTeksta = prompt("izaberite boju teksta").toLowerCase();

if (bojaTeksta == "plava") {
	dugme.style.color = "blue";
} else if (bojaTeksta == "crvena") {
	dugme.style.color = "red";
}

//

let visina = prompt("Unesite visinu dugmeta");

if (visina <= 50) {
	alert("visina ne sme biti manja od 50px");
} else {
	dugme.style.height = visina + "px";
}

//

let sirina = prompt("Unesite sirinu dugmeta");
if (sirina <= 50) {
	alert("sirina ne sme biti manja od 50px");
} else {
	dugme.style.width = sirina + "px";
}
