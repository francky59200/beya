//corrections
 function ajout() { 
do {
	courses =prompt("saisissez un article");
	if(courses) {
	liste.push(courses);
	}
}
while(courses);


function save() {
//ici on sauvegarde les donnees avant tout on transforme le tableau
// en string avec JSON.stringfy
// et ensuite on le sayuvegarde avec la methode setItem() au quel
//on donne un nouveau nom a notre liste pour la sauvegarde.
	let data = JSON.stringify(liste);
	localstorage.setItem("liste1", data);
}
function display() {
//ici on recupére notre notre sauvegarde avec la methode
//getItem() et ensuite comme il etait en cahaine de caractéres
//on le retransforme en objet garce a la methode JSON.parse()
	let data=localStorage.getItem("liste1");
	if( data != null) {
		liste=JSON.parse(data);
	}
	document.write("liste contient" + liste.length + "produits <br>");
	document.write(liste.join("-"));
}
function removeAll() {
//pour supprimer les données dans le localStorage avec la methode
//removeItem()
	liste =[];
	localStorage.removeItem("courses");
	display();
}
function remove() {
	let index= prompt("que voulez vous rétirez?");
	index = liste.indexOf(item);	
	if(index== -1) {
		console.log("le produit" + item + "n'existe pas");
	}
	else {
		liste.splice(index, 1);
	}
	save();
	display();
}
//la methode indexOf() permet de renvoyé la valeur qui est cherché
//au sein d'un tableau elle renvoie -1 lorsque la valeur n'existe pas.