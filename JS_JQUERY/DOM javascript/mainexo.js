 "user stict"
let button1;
let article;
let cpt=localStorage.getItem("cpt");
let compteur;
function color(){
    //ici on, afecte directement l'élement avec un toggleClass du css green
    $("arti1").toggleClass("green");
    add();
}
function cache(){
    //ici on fait disparaitre l'article avec un toggle hide
    $("#arti1").toggle("hide");
    add();
}
function souris() {
    //ici  on rajoute un élément class du css a notre article
    $("arti1").toggleClass("red");
	add();
}
function add() {
	cpt++;
    $("p").html("vous avez cliquez " + cpt + " fois");
    localStorage.setItem("cpt", cpt);
}
$(function(){
	$("#arti1").on("dblclick", color);//on applique a la div l'évenement

    $("#coucou").on("click", cache);//on applique au bouton l'événement

    $("#arti1").on("mouseover", souris);//on applique la div l

    compteur=document.querySelector("#compteur");
});