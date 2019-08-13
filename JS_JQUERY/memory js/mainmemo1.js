let duo=[];
let tds;
let essais=0;
let nb=false;
function generateCard(){
	//on fait une boucle du
	let tab=[];
	for(let i=0; i<16;i++){
		let nb=Math.floor(Math.random()*16)+1//on fait un math random pour prendre un chiffre aleatoire
		if(tab.indexOf(nb)==-1){// on cree un fonction indexof si le nombre cherché n'est pas dans le tableau
			tab[i]=nb;//
		}
		else{
			i--
		}
	}
	console.log(tab);
	for(let i=0; i<tab.length; i++){
		if(tab[i]>=9){
			tab[i]=tab[i]-8;
		}
	}
	console.log(tab);
	let table=document.querySelector("#tabcartes");
	let cpt=0;
	for(let i=1; i<=4; i++){
		let tr=document.createElement('tr');
	   for(let j=1; j<=4; j++){
		let td=document.createElement('td');
		let img=new Image();
		img.src=tab[cpt]+'.jpg';
		img.classList.add('hide');
		td.appendChild(img);
		tr.appendChild(td);
		cpt++;
	}
	table.appendChild(tr)
}
}
function retourner(){
	this.childNodes[0].classList.remove('hide');
	duo.push(this.childNodes[0])
	if(nb==false){
		nb=true;
	}
	else{
		nb=false;
		essais++;
		setTimeout(compare,500);
	}
}
function compare(){
	if(duo[0].src != duo[1].src){
		duo[0].classList.add("hide");
		duo[1].classList.add("hide");
	}
	duo=[];
}
document.addEventListener("DOMContentLoaded", function(){
	generateCard();
	tds=document.querySelectorAll('td');
	for(let i=0; i<tds.length; i++){
		tds[i].addEventListener("click", retourner);
	}
});