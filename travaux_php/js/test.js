let data;
let listeMannequin=[];
let state={}
    state.index=0;
    state.timer=null;
let timer;
let index;
let tab=[{src:"img/slidestest/10.jpg", titre:"mannequin_1", desc:"etats-unis"},
         {src: "img/slidestest/20.jpg", titre:"mannequin_2", desc:"france"},
         {src:"img/slidestest/30.jpg", titre:"mannequin_3", desc:"espagne"}];

function display1(){
	$(".slide img").attr("src", tab[state.index].src);
	$(".slide h2").text(tab[state.index].titre);
	$(".slide p").text(tab[state.index].desc);

    if(state.index==0){
    	$("#un").css("color", "white");
    	$("#deux").css("color", "red");
    	$("#trois").css("color", "red");
    }
   else if(state.index==1){
    	$("#un").css("color", "red");
    	$("#deux").css("color", "white");
    	$("#trois").css("color", "red");
    }
    else{
    	$("#un").css("color", "red");
    	$("#deux").css("color", "red");
    	$("#trois").css("color", "white");
    }
}

function next1(){
	state.index++;
	if(state.index==tab.length){
		state.index=0;
	}
	display1();
}
function previous1(){
	state.index--
	if(state.index==-1){
		state.index=tab.length-1
	}
	display1();
}
function play1(){
	timer=null;
	timer=setInterval(next1, 3000);
}
function pause(){
	clearInterval(timer);
	timer=null;
	display1();
}
function slide1(){
	pause();
	state.index=0;
	display1();
	play1();
}
function slide2(){
	pause();
	state.index=1;
	display1();
	play1();
}
function slide3(){
	pause();
	state.index=2;
	display1();
	play1();
}


function beaute(){
if($("#nbMannequin").val()<1 || $("#nbMannequin").val()>5){
	alert("veuillez choisir un nombre entre 1 et 5");
}
else{
	listeMannequin[listeMannequin.length]={
		nombre: $("#nbMannequin").val(),
		type: "femme1",
		prix: ($("#nbMannequin").val())*75
	};
	save();
	display();}
}
function save(){
	data= JSON.stringify(listeMannequin);
	localStorage.setItem("liste1", data);
}

function display(){
	data=localStorage.getItem("liste1");
	if(data != null){
     listeMannequin= JSON.parse(data);
     $("#listeEnvie").empty();
     for(let i=0; i<listeMannequin.length; i++){
     	$("#listeEnvie").append('<p>' +listeMannequin[i].nombre+ ' '+listeMannequin[i].type + '<span>  ' + listeMannequin[i].prix +'€ </span></p>');
     	$("#vider").show();
     }
	}
	else {
        $('#vider').hide();
	}
}

function viderListe(){
	$("#listeEnvie").empty();
	localStorage.removeItem("liste1");
	listeMannequin.splice(0, listeMannequin.length);
	alert("ma liste est vide");
	display();
	$("#listeEnvie").append('<p class= blue> la liste est vide</p>');
}


$(function(){
	play1();
	display1();
	$('#mannequin').on('click', beaute);
	display();
	$('#vider').on('click', viderListe);
	$("#precedent").on('click', previous1);
	$("#suivant").on('click', next1);
	$("#un").on("click", slide1);
	$("#deux").on("click", slide2);
	$("#trois").on("click", slide3);
});