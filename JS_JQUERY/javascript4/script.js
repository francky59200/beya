"use strict"
var voiture;
voiture = {};
voiture.marque = "Peugeot";
voiture.annéeFabrication = 2013;
voiture.couleur = "noir";
voiture.passager = ["cécile", "jean"];
voiture = {marque: "Peugeot", annéeFabrication: "2013", couleur: "rouge", passager: ["cécile", "jean"]};

document.write("<li>" + voiture.marque + "</li>");
document.write("<li>" + voiture.annéeFabrication + "</li>");
document.write("<li>" + voiture.couleur + "</li>");
document.write("<li>" + "passager 1: " + voiture.passager[0] + "</li>");
document.write("<li>" + "passager 2: " + voiture.passager[1] + "</li>");