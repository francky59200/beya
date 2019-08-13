"use strict"
var courses;
var courses = ["lait", "créme", "beurre", "tomates"];
courses.shift();
courses.unshift("lait entier");
courses.push("champignons")
courses.join ("-");
courses[2] = "haricots verts"
document.write(courses.join("-"));
courses.push(prompt("que voulez vous rajouter"));
document.write(courses.join("-"));
document.write("la liste contient" + "liste.length" + "élements");

// LES OBJETS EN JASCRIPT
 var monStylo;
monStylo = {};
monStylo.couleur ="noir";
monStylo.epaisseur = "médiu";
monStylo.marque = "bIC";
console.log(monStylo);

// les boucles en javascript

let cpt;
cpt = 0;
while (cpt < 10) {
	document.write('<p> mon compteur est a' + cpt + '</p>');
	cpt ++;
}

/*let player;
let ordi;
let nbMin =1;
let nbMax =100;
let n =1;
player= prompt("entrer un nombre");

ordi= Math.floor(Math.random()*100)+1;
console.log(ordi);
while(ordi != player && n <=6) {
	if(player < ordi){
		nbMin =player;
		player= prompt("le nombre est trop petit\n saisir un nombre entre" + nbMin + 'et'+ nbMax );

	}
	else if(player > ordi) {
		nbMax= player;
         player=prompt("le nombre est trop grand\n saisir un nombre entre" + nbMin + 'et' + nbMax);
    }
	n++
}
if(player == ordi){
alert("cest bon tu as trouvé");
}
else {
	alert("vous avez perdu");
}

let cpt;
cpt =0;

do {
	cpt++;
	document.write("<br> compteur" + cpt);
}
while(cpt < 10);*/

let courses;
let liste;
liste = [];


do {
	courses =prompt("saisissez vos courses");
	liste.push(courses);
}
while(courses != "" && courses != null);
	document.write(liste.join("-"));

/*for (cpt =1; cpt <= 10; cpt++) {
	document.write('<p> compteur: ' + cpt + '</p>');
}

let liste = ['pain', 'cornichons', 'tomates', 'saucisson'];
for (cpt= 0; cpt < liste.length; cpt++) {
	document.write(liste[cpt] + "<br>");
}
/*let nb;
let liste;
liste= [];
let i;
let nbMin=200;
let nbMax=1;

for( i= 1; i <= 20; i++) {
	nb = Math.floor(Math.random()*200)+ 1;
	liste.push(nb);
}
console.log(liste);

for(i =0; i<liste.length; i++) {
	if(liste[i] < nbMin) {
		nbMin = liste[i];
	}
    if(liste[i] > nbMax) {
    	nbMax =liste[i];
    }
}
console.log("le plus petit nombre " + nbMin);
console.log("le plus grand nombre " + nbMax);*/

/*let column;
let utulisateur;
document.write("<table>")
utulisateur= prompt("saisissez un nombre");
 for( row = 1; row <= utulisateur; row++) {
 	document.write("<tr>");
 	if(row===column) {
 		document.write( "<td>" + row*column (class= 'diago') + "</td>");
 	}
 	for(column =1; column <= utulisateur; column ++) {
 		document.write("<td>" + row*column + "</td>");
 	}
 	document.write("</tr>");
 }
 document.write("</table");

/*function sayHello() {
	document.write("bonjour à tous");
}
sayHello();
 function sayHello2(firstname, lastname) {
 	document.write("bonjour" + firstname + " " + lastname);
 }
 sayHello2("cécile", "villeport");

let result;


 function calculTva(ht, taux) {
 	let ttc= ht + (ht * taux/100);
 	return ttc;
 }
 result= calculTva(100, 20);
 console.log(result);
 console.log(calculTva(150 , 5));*/
