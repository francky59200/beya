"user script"
/*let firstNumber;
let seconNumber;
let operateur;
let resultat;
firstNumber=parseInt(prompt("saisissez un nombre"));
seconNumber=parseInt(prompt("saisissez un nombre"));
operateur =(prompt("saisissez une operation").toLowerCase());
switch(operateur) {
	case "+": case "addition":
	resultat = firstNumber + seconNumber;
	break;
	case "-": case "soustraction":
	resultat = firstNumber - seconNumber;
	break;
	case "*": case "multiplication":
	resultat = firstNumber * seconNumber;
	break;
	case "/": case "division":
    if(seconNumber = 0) {
    	alert("resultat impossible");
    }
    else(resultat= firstNumber / seconNumber) 
    	alert(resultat);
    
    break;
}
alert(resultat);*/

let random;
let utulisateur;
let ordi;
random=Math.random();

if(random < 1/3) {
	ordi = "feuille";
}
else if(random < 2/3) {
	ordi = "ciseau";
}
else {
	ordi = "pierre";
}
utulisateur=prompt("saisissez un choix");
if(utulisateur = "pierre") {
	switch(ordi) {
		case "feuille" :
		alert("j'ai tiré" + ordi +" tu as perdu");
		break;
		case "ciseau":
		alert("j'ai tiré" + ordi +" tu as gagné");
		break;
		case"pierre":
		alert("j'ai tiré" + ordi + " on est a égalité");
		break;

	}
}
else if(utulisateur = "ciseau") {
	switch(ordi) {
		case "ciseau":
		alert("j'ai tiré" + ordi +" on est à égalité");
		break;
		case "feuille":
		alert("j'ai tiré" + ordi +" tu as gagné");
		break;
		case "pierre":
		alert("j'ai tiré" + ordi +" tu as perdu");
		break;
	}
}
else if(utulisateur = "feuille") {
	switch(ordi) {
		case "pierre":
		alert("j'ai tiré" + ordi +" tu as gagné");
		break;
		case "ciseau":
		alert("j'ai tiré" + ordi +" tu as perdu");
		break;
		case "feuille":
		alert("j'ai tiré" + ordi +" on est a égalité");
		break;
	}
}