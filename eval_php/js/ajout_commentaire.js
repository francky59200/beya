"use strict"

// Affiche le bloc formulaire de commentaire
function afficherFormulaireComm() {
  $('.confirmComm').text('');
  $('#commForm').css('display','block');
}

// Envoie le commentaire et l'enregistre en base de donnée
function envoyerComm() {
  let nom = $('#nom').val();
  let email = $('#email').val();
  let comm = $('#comm').val();
  let id = $(this).data('id');

  if (nom == '' || email == '' || comm == '') {
    $('.erreur').text('Merci de remplir tous les champs du formulaire !');
  }
  else {
    $.post("ajax/ajout_commentaire.php",{nom:nom, email:email, comm:comm, id:id}, confirmerEnvoi);
  }
}
console.log(envoyerComm);

// Confirme l'envoie du commentaire à l'utilisateur, vide les champs et textes
function confirmerEnvoi() {
  $('.confirmComm').text('Merci pour votre commentaire, il sera publié après modération.');
  $('.erreur').text('');
  $('#commForm').css('display','none');
  $('.commForm')[0].reset();
}

$(function () {
  $('#ecrireComm').on('click', afficherFormulaireComm);
  $('#ajoutComm').on('click', envoyerComm);
})
