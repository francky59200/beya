let liste_de_courses=[];
let liste_des_courses=[];

function addItem(){// on demande a l'util de renseigner un produit sur sa liste
	let util=prompt("veuillez rajouter un produit");
	if(util!=null){// s'il est different de nul ils e rajoute a la liste
		liste_de_courses.push(util);
	}
	display();// on le met dans la liste a puces
	save();//et on le sauvegarde
}
function display(){
//cette fonction perment de mettre l'enttrée dans une liste a puces 
	let i;
	$("#article").empty();
	for(i=0; i<liste_de_courses.length; i++){// on fait une boucle pour mettre l'entrée
		$("#article").append("<input type='checkbox' value='" + liste_de_courses[i] +"'>"+ liste_de_courses[i]+"<br>");
	}
}
function save(){// on sauvegarde la liste
	let data = JSON.stringify(liste_de_courses);// on le transforme d'objet en string
	localStorage.setItem("liste1", data);// et on le sauvegarde en localStorage
}
function vider(){// on vide toute la liste
 liste_de_courses.splice(0, liste_de_courses.length);// ici on vide du premier article
 // jusqua la fin de la liste d'ou le .length
 display();// on affiche toujours la liste
}
function supprimer(){
//ici on supprime un article cheké on fait une boucle des articles checké
//on verifie s'il existe avec la methode indexOf si elle positive c'est que l'article
//existe et on le supprime avec la liste.splice en argumant
    let index=$("input[type=checkbox]:checked");
    for(i=0; i<index.length; i++){
    let suppr=liste_de_courses.indexOf(index[i].value);
    if(suppr>-1){
    	liste_de_courses.splice(suppr, 1);
    }
  }
    save();// on sauvegarde la liste
    display();//et on affiche la liste restant
}
function sauvegarde(){
	//ici on sauvegarde toute les listes avec la date du jour 
	//on les rajoute dans un grande liste qu'on sauvegarde aussi 
	let d= new Date();
	let datelist= d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
    let data=JSON.stringify(liste_de_courses);
	liste_des_courses.push({'date': datelist, 'contenu': liste_de_courses});
	let data1= JSON.stringify(liste_des_courses);
	localStorage.setItem("liste1", data);
	localStorage.setItem("liste2", data1);
	displayList();
	
}

function displayList(){
	liste_des_courses=localStorage.getItem('liste2');
	liste_des_courses=JSON.parse(liste_des_courses);
	console.log(liste_des_courses)
	for(let i=0; i<liste_des_courses.length; i++){
		$('#artic ul').append('<li>'+liste_des_courses[i].date+'</li>');
	}
	//aller chercher liste2 dans le storage

	//le parser

	//parcourir le tableau obtenir (for)

	//afficher la date dans une liste
}

$(function(){
	$("#titre3").append("<h3>vos sauvegardes</h3>");
	$("#titre1").append("<h2>Liste de courses</h2>");
	$("#titre2").append("<h3>la liste contient :</h3>");
	$("#ajout").on("click", addItem);
	$("#vide").on("click", vider);
	$("#supprimer").on("click", supprimer);
	$("#sau").on("click", sauvegarde);
	displayList();
});