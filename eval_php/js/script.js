"use strict"

function refreshComm() {
  $.post("ajax/refresh_comm.php", affichageComm);
}
function affichageComm(reponse) {
  reponse = JSON.parse(reponse);
  let commentaires = reponse[0];
  let promus = reponse[1];

  $(".last_comm").empty();
  for (var i = 0; i < commentaires.length; i++) {
    $(".last_comm").append('<p><i class="fas fa-angle-right"></i> ' + commentaires[i]['commentaire'].substr(0,40) + "...</p>");
  }
  for (var j = 0; j < promus.length; j++) {
      $(".nb_comm"+promus[j]['id']).empty();
      $(".nb_comm"+promus[j]['id']).append(promus[j]['nb_comm']);
  }
}

let timer = setInterval(refreshComm, 10000);
