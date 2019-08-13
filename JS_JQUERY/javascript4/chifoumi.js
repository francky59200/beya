/*let nom;
let ordi;
let choixOrdi;
nom = prompt("saisissez un nom").toLowerCase();
ordi = Math.random();
if(ordi <= 0.36) {
	choixOrdi = "pierre";
}
else if(ordi >= 0.50) {
	choixOrdi = "ciseau"
}
else if(ordi >= 0.72) {
	choixOrdi = "feuille"

}
if(nom = "pierre") {
	switch(choixOrdi) {
		case "pierre":
		alert("j'ai tiré" + choixOrdi + "on est à égalité");
		break;
	    case "ciseau":
	    alert("j'ai tiré" + choixOrdi + "j'ai gagné");
	    break;
	    case "feuille":
	    alert("j'ai tiré" + choixOrdi + "tu as perdu");
	    break;
	}
}
else if(nom ="ciseau") {
	switch(choixOrdi) {
		case "pierre":
		alert("j'ai tiré " + choixOrdi + "tu as perdu");
		break;
		case "ciseau":
		alert("j'ai tiré " + choixOrdi + "On est à égalité");
		break;
		case "feuille":
		alert("j'ai tiré " + choixOrdi + "j'ai gagné");
		break;
	}
}
else if (nom = "feuille") {
	switch(choixOrdi) {
		case "pierre":
		alert("j'ai tiré " + choixOrdi + "tu as perdu");
		break;
		case "feuille":
		alert("j'ai tiré " + choixOrdi + "on est a égalité");
		break;
		case "ciseau":
		alert("j'ai tiré " + choixOrdi + "on a gagné");
		break;
	}
}*/

let firstNumber;
let secondNumber;
let operateur;
let total

firstNumber= parseInt(prompt("entrer un nombre"));
secondNumber= parseInt(prompt("entrer un nombre"));
operateur=(prompt("veuillez selectionner votre opérateur").toLowerCase());
switch(operateur) {
	case '+': case 'addition':
	total= firstNumber + secondNumber;
	alert(total);
	break;
	case'-' : case 'soustraction':
	total= firstNumber - secondNumber;
	alert(total);
	break;
	case'*': case'multiplication':
	total= firstNumber * secondNumber;
	alert(total);
	break;
	case'/': case'division':
	if(secondNumber== 0) {
		alert("impossile division");
		break;
	}
	else (total=firstNumber / secondNumber);
	alert(total);
	break;
}

/*let jourActuel;
let jourSuivant;

jourActuel =prompt("saisissez votre jour: ");
switch(jourActuel) {
	case "lundi":
	jourSuivant = "mardi";
	alert("on est " + jourSuivant);
	break;
	case "mardi":
	jourSuivant = "mercredi"
	alert("on est " + jourSuivant);
	break;
	case "mercredi":
	jourSuivant = "jeudi";
	alert("on est " + jourSuivant);
	break;
	case "jeudi":
	jourSuivant = "vendredi";
	alert("on est " + jourSuivant);
	break;
	case "vendredi":
	jourSuivant = "samedi"
	alert("on est " + jourSuivant);
	break;
	case "samedi":
	jourSuivant = "dimanche"
	alert("on est " + jourSuivant);
	break;
}*/

