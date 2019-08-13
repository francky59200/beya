"use strict"
// *** Fonctions ***

/////////////////////////////////////////////////
//// PUBLICATION ou DEPUBLICATION COMMENTAIRE ///
function publierDepublier(){
	let id = $(this).data('id');
	let text = $(this).text();

	if (text == 'Publier') {
		$.post("ajax/publier_comm.php",{id:id},confirmPublier);
	}
	else {
		$.post("ajax/depublier_comm.php",{id:id},confirmDepublier);
	}
}
// Réponses
function confirmPublier(reponse){
	reponse = JSON.parse(reponse);
	console.log(reponse);
	console.log(reponse[0]);
	$('#num'+reponse[0]).text("Dépublier");
	$('.publie'+reponse[0]).text('Oui');
	$(".commValid"+reponse[0]).remove();
	$(".nbCommPub").text(reponse[1]['nb_comm']);
	$(".nbCommNonPub").text(reponse[2]['nb_pucomm']);
}
function confirmDepublier(reponse){
	reponse = JSON.parse(reponse);
	console.log(reponse);
	console.log(reponse[0]);
	$('#num'+reponse[0]).text("Publier");
	$('.publie'+reponse[0]).text('Non');
	$(".nbCommPub").text(reponse[1]['nb_comm']);
	$(".nbCommNonPub").text(reponse[2]['nb_pucomm']);
}

/////////////////////////////
//// SUPPRESSION ARTICLE ///
////////////////////////////
function supprimer() {
	let id = $(this).data('id');

  if (confirm("Voulez vous vraiment supprimer ce commentaire ?")) {
    $.post('ajax/supprimer_comm.php',{id:id}, confirmerSuppression);
  }
}
// Réponse
function confirmerSuppression(reponse) {
	reponse = JSON.parse(reponse);
	$("#comm"+reponse[0]).remove();
	$(".nbCommPub").text(reponse[1]['nb_comm']);
	$(".nbCommNonPub").text(reponse[2]['nb_pucomm']);
	$(".nbCommSuppr").text(reponse[3]['compteur']);
}

// *** Gestionnaire d'évenements ***
$(function(){

		$(".publication").on("click", publierDepublier);
		$(".supprimer").on("click", supprimer);
})
