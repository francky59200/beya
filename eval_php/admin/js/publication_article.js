"use strict"
// *** Fonctions ***

/////////////////////////////////////////////////
//// PUBLICATION ou DEPUBLICATION ARTICLE ///
/////////////////////////////////////////////////
function publierDepublier(){
	let id = $(this).data('id');
	let text = $(this).text();

	if (text == 'Publier') {
		$.post("ajax/publier_article.php",{id:id},confirmPublier);
	}
	else {
		$.post("ajax/depublier_article.php",{id:id},confirmDepublier);
	}
}
// Réponses
function confirmPublier(reponse){
	reponse = JSON.parse(reponse);
	$('#num'+reponse).text("Dépublier");
	$('.publie'+reponse).text('Oui');
}
function confirmDepublier(reponse){
	reponse = JSON.parse(reponse);
	$('#num'+reponse).text("Publier");
	$('.publie'+reponse).text('Non');
}

/////////////////////////////
//// SUPPRESSION ARTICLE ///
////////////////////////////
function supprimer() {
	let id = $(this).data('id');

  if (confirm("Voulez vous vraiment supprimer cet article ?")) {
    $.post('ajax/supprimer_article.php',{id:id}, confirmerSuppression);
  }
}
// Réponses
function confirmerSuppression(reponse) {
	reponse = JSON.parse(reponse);
	$("#art"+reponse).remove();
}

// *** Gestionnaire d'évenements ***
$(function(){
		$(".publication").on("click", publierDepublier);
		$(".supprimer").on("click", supprimer);
})
