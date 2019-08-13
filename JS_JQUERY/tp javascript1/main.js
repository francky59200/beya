"use strict";
let liste;
liste =[];
let utulisateur;
let courses;
let cpt;
cpt=0;

function ajout() {
	do {
		courses=prompt("saisissez un article");
		if ((courses!=="" ) && (courses !== null)){
	    liste.push(courses);
		}
	    }
	    while((courses !== "") && (courses !== null));
	    affiche();
}
function affiche() {
	let choix;
	alert("votre liste contient: " + liste.join("-") + "\n votre liste a " + liste.length);
	choix =prompt("que voulez vous faire ; \n 1. ajouter une courses. \n2. afficher votre liste \n 3. enelever de la liste \n 4.vider la liste \n 5.stocker \n 6.recuperer");
	switch(choix) {
		case "1":
		ajout();
		break;
		case "2":
		affiche();
		break;
		case "3":
		enleve();
		break;
		case "4":
		vider();
		break;
		case "5":
		storage();
		break;
		case "6":
		get();
		break;
		default :
		alert("veuillez choisir un chiffre entre 1 et 6");
	}
}
function enleve() {
	utulisateur= prompt("quel article voulez vous retirer");
	let index = liste.indexOf(utulisateur).toLowerCase;
	liste.splice(index,1);
	/*alert(liste.join("-"));*/	
	affiche();

}
function vider() {
 liste.splice(0, liste.length);
 affiche();
}
ajout();

// Webstorage stocké ces données dans une liste
function storage() {
	localStorage.setItem("liste1", JSON.stringify(liste)); // elle permet de stocké ces données dans un local storage
	affiche();
}

function get(){
	liste=JSON.parse(localStorage.getItem("liste1")); // elle permet de recupérer ces données meme apres les avoir supprimer dans son local
	affiche();
}
/* liste 1 est le nom donné a notre liste ecrit en string
ainsi on peut l'utuliser en stockage