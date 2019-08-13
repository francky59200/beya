const CHARGES =18/100
const 	IMPOTS = 8/100;
var net;
var brut;
brut =prompt("quel est ton salaire brut");
net =brut-(brut*CHARGES)-(brut*IMPOTS);
document.write("avec un salaire " +  brut + " votre salaire net est de" + net);

let enfants;
enfants = prompt("quel est le nombre enfants");
if (enfants == 3) {
	net +=net+3/100;
}
else if(enfants >= 4) {
	net +=net+4/100;
}
else {
	net;
}
document.write("avec un salaire brut " + brut + "$, votre salaire est de " + net + "$");
 //lorsqu'on a beaucoup de conditions on utulise la condition switch*/

 let message =parseInt(prompt("saisissez un nombre entre 1 et 8"));
  switch(message) {
  	case 1: case 5:
  	alert("vous avez gagnez un voyage");
  	break;
  	case 2: case 6:
  	alert("vous avez gagnez un stylo");
  	break; case 7:
  	case 3:
  	alert("vous avez gagner une switch");
  	break;
  	case 4:
  	alert("vous avez gagnez une bille");
  	break;
  	default:
  	alert("vous n'avez pas saisi le bon numéro");
  }












var jour;
jour = new Array();
// jour = [];

jour = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
document.write("<br>" + jour[0]);
document.write("<br>" + jour[3]);
jour.push("lundi");// rajoute un élement à la fin du tableau
jour.join("-");// ça rajoute le "-" entre les élements du tableau
document.write("<br>" + jour.join("-"));
jour.unshift("dimanche");// ajouter un élement au début du tableau
document.write("<br>" + jour.join("-"));
document.write("<br>" + jour.length);
jour.shift(); // enléve une ddonnée au debut du tableau
jour.pop();// enléve a la fin du tableau*/
