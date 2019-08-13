let button1;
let button2;
let article;
let button3;
function sayHello() {
	alert("coucou");
}
function blueColor() {
	let titres=document.querySelectorAll("h2");
	for (let i=0; i<titres.length; i++) {
		titres[i].classList.toggle("blue");
	}
}
function fonce(){
	this.classList.toggle("fonce");
}
function modifText() {
	let txt=prompt("que voulez-vous écrire?")
	article.innerHTML="<strong>" + txt +"</strong>";
}
document.addEventListener("DOMContentLoaded", function() {
	button1=document.querySelector("#coucou");
	button1.addEventListener("#coucou");
	button2=document.querySelector("#bluecolor");
	button2.addEventListener("click", blueColor );
	article=document.querySelector("#art1");
    article.addEventListener("mouseover", fonce);
    button3=document.querySelector("#changeText");
    button3.addEventListener("click", modifText);
});

