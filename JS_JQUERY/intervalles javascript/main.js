let rectangle;
let lancer;
let buttonClear;
function disco() {
	rectangle.classList.toggle("pink");
}
function go() {
	timer=setInterval(disco, 250);
}
function stop() {
	clearInterval(timer);
}

document.addEventListener("DOMContentLoaded", function(){
	rectangle=document.querySelector("article");
	lancer=document.querySelector("#lancer");
	buttonClear=document.querySelector("#clear");
	lancer.addEventListener("click", go);
	buttonClear.addEventListener("click", stop);
});