let liste=[];
let listes=[];

function addItem(){
	let util=prompt("que veux tu ajouter a la liste")
	if(util!=null){
		liste.push(util);
	}
	display();
	save();
}

function display(){
	let i;
	$("#article").empty();
	for(i=0; i<liste.length;i++){
		$("#article").appen("<input type=checkbox value:"+ liste.length+">"+liste.length+"<br>");

	}
}
function save(){
	let data= JSON.stringfy(liste);
	localStorage.setItem("liste1", data);
}
function vider(){
	liste.splice(0, liste.length);
	display()
}
function supprimer(){
	let index=$("<input[type=chekbox]:checcked");
	for(let i=0; i<index.length;i++){
		let suppr=liste.indexOf([index.length].value);
		if(suppr>-1){
			liste.splice(suppr,1);
		}
	}
	save();
	display();
}
function sauvegarder(){
	let d=new Date();
	let date=[d.getDate()+"/"+(d.getMonth()+1)+"/"+d.get.FullYear()];
	let data=JSON.stringfy(liste);
	listes=[{"date":dateList, "contenu": liste}];
	let data1=JSON.stringfy(listes)
	localStorage.setItem("liste1", data);
    localStorage.setItem("liste2", data1);
    displayList()
}
function displayList(){
	let i;
    listes=localStorage.getItem("liste2");
    listes=JSON.parse(listes);
    for(i=0; i<listes.length;i++){
    	$("#artic ul").append("<li>"+listes[i].date+"</li>")
    }
}
$(function{
	$("#titre1").append("Mes grandes courses");
	$("#titre2").append("mes course du jour");
	$("#titre3").append("Mes sauvegardes");
	$("#ajout").on("click", addItem);
	$("#vide").on("click", vider);
	$("#supprimer").on("click", supprimer);
	$("#sau").on("click", sauvegarder);
})