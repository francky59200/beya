function coucou(){
	alert("coucou");
}
function blueColor(){
	$("h2").toggleClass("blue");
}
function changeTxt(){
	let txt= prompt("quoi?");
	$("#art1").text(txt);// txt est une variable
	$("#art2").html("<strong>" + txt + "</strong>");// ajoute un elet html
	$("#art1").append("Toto");// append rajoute du texte
}
function changeBack(){
//avec this on cible l'élement et on rajoute a la class
//avec addclass ici la couleur pink traduit en css
	$(this).addClass("pink");
}
function disparition(){
	$("#art1").hide('slow')// la methode hide permet de faire disparitre le texte
}
function chgImg(){
	if((this).attr("src")=="10.jpg"){
		$(this).attr("src", "10.jpg")
	}
	else{
		$(this).attr("src","20.jpg");
	}
}
function coucou(){
	$("#art1").html("coucou");//ici on ajoute html a l'article
	$("#art1").css("font-size", "30px");//on ajoute le css
}
$(function(){
	// ici on cree le DOM les evenements....
	$("#coucou").on("click", coucou);
	$("#blueColor").on("click", blueColor);
	$("#changeText").on("click", changeTxt);
	$("#art1").on("mouseover", changeBack);
	$("img").on("mouseover", chgImg);
	$("#disparition").on("click", disparition);
});
