"use strict"

function reinit_visites() {
  if (confirm("Voulez vous réinitialiser le compteur de visites ?")) {
    $.post('ajax/reinit_visites.php', confirmerReinit);
  }
}
function confirmerReinit() {
  $("#visites").text('0');
}


// *** Gestionnaire d'évenements ***
$(function(){
		$(".reinit").on("click", reinit_visites);
})
