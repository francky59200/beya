"use strict";

let data;
let listMassage = [];

function ajoutRflxPltr() {
  if(($("#nmbrRflxPltr").val()<1) || ($("#nmbrRflxPltr").val()>5)){
      alert("Choisissez un valeur entre 1 et 5!");
  }
  else{
   listMassage[listMassage.length] = {
    nombre: $("#nmbrRflxPltr").val(),
    type: "Réflexologie plantaire",
    prix:$("#nmbrRflxPltr").val()*50
  };
  save();
  display();}
}

function ajoutMsgBnEtre() {
  if(($("#nmbrMsgBnEtre").val()<1) || ($("#nmbrMsgBnEtre").val()>5)){
      alert("Choisissez un valeur entre 1 et 5!");
  }
  else{
  listMassage[listMassage.length] = {
    nombre: $("#nmbrMsgBnEtre").val(),
    type: "Massage bien-être",
    prix:$("#nmbrMsgBnEtre").val()*60
  };
  save();
  display();}
}

function ajoutSnPochon() {
  if(($("#nmbrSnPochon").val()<1) || ($("#nmbrSnPochone").val()>5)){
      alert("Choisissez un valeur entre 1 et 5!");
  }
  else{
  listMassage[listMassage.length] = {
    nombre: $("#nmbrSnPochon").val(),
    type: "Soin relaxant aux pochons",
    prix:$("#nmbrSnPochon").val()*75
  };
  save();
  display();}
}

function viderListe() {
  $("#listeEnvie").empty();
  listMassage.splice(0, listMassage.length);
  localStorage.removeItem("liste");
  alert("Votre liste est vider!");
  display();
  $("#listeEnvie").append("<p class='blue'>La liste est vide.</p>");
}

function save() {
  data = JSON.stringify(listMassage);
  localStorage.setItem("liste", data);
}

function display() {
  data = localStorage.getItem("liste");
  if (data != null) {
    listMassage = JSON.parse(data);
    $("#listeEnvie").empty();
    for (let i = 0; i < listMassage.length; i++) {
    $("#listeEnvie").append("<p>" + listMassage[i].nombre + "." + listMassage[i].type + " : <span>"+listMassage[i].prix+"€</span></P>");
      $("#vider").show();
    }
  } else {
    $("#vider").hide();
  }
}


document.addEventListener("DOMContentLoaded", function() {
  $("#ajoutRflxPltr").on("click", ajoutRflxPltr);
  $("#ajoutMsgBnEtre").on("click", ajoutMsgBnEtre);
  $("#ajoutSnPochon").on("click", ajoutSnPochon);
  $("#vider").on("click", viderListe);
  display();
});
j