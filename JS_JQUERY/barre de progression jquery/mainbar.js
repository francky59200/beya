
function lance(){
// on donne une animation a notre barre cree sur css
//on rajoute une animation on lui donne sa taille,
//le temps en millesecondes et on lui rajoute une
//fonction pour la fin ici finish()
$("#barre").animate({width:500},5000,finish);
setInterval(percent, 500)
if(percent()==100){
	$("#barre").html("<img src= newyork.jpg alt= chaton>");
}
}
function stop(){
//on cree une fonction pour arreter le temps
	$("#barre").stop();
}
function finish(){
//on cree une fonction pour la couleur a la fin du chrono
	$("#barre").css("background-color", "blue");
}
function percent(){
//on cree une fonction pour le pourcentage
	let n;
	n=Math.round(parseInt($("#barre").css("width"))/5);
	$("#cent").html(n+"%");
}
// ici on fait appeler le DOM JQUERY
$(function(){
	$("#depart").on("click", lance);
	$("#arret").on("click", stop);
});
