"user strict"
let chiffres;
let nbMin=1;
let nbMax=8
let cpt;
let compteur;
let tab=[];
let i=0;
let nbAlea;

function generation(){
let j = 0;

let val = Math.floor(Math.random() + 1);
tab[0] = val;
do {
 val = Math.floor(Math.random() + 1);
 for ( i = 0; i < tab.length - 1; i++) {
   if (val == tab[i]) {
     j++;
   }
 }
 if (j < 2) {
   tab[tab.length] = val;
   j = 0;
 }
}
while (tab.length < 16);
}
generation();


function add(){
	cpt++;
	compteur.textContent="vous avez cliqué " + cpt + " fois";
}



document.addEventListener("DOMContentLoaded", function(){
coompteur=document.querySelector("#compteur");
tab=document.querySelector("#table");
document.addEventListener("#table", generation);
});