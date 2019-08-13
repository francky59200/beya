let tab;
tab=[{src:"poi.jpg", titre:"premiere beauté", desc:"une vraie beaute"} ,
{src:"john.jpg", titre: "deuxieme beauté", desc: "magique"}, {src:"slow.jpg",
titre:"troisiéme beauté", desc:" elle est exceptionnelle"}, {src:"Man4.jpg",
titre:"quatriéme beauté", desc:"un vrai bijou"},{src:"Man5.jpg", titre:
"cinquieme beauté", desc:"une vraie perle"}, {src:"Man6.jpg", titre:"sixiéme beauté", desc:"le saint graal"}, {src:"Man7.jpg", titre:
"septieme beauté", desc:"j'adore"}, {src:"Man8.jpg", titre:"huitieme beauté"
, desc:"la plus belle"}];
let state={};
state.timer=null;
state.index=0;
let timer;
function display(){
  //on attribut chaque element a la photo avec la methode attr
  // avec la variable state.index pour cibler un élement du tableau
       $("figcaption").attr("src", tab[state.index].desc);
       $("img").attr("src",tab[state.index].src);
       $("p").attr("src", tab[state.index].titre);
}      
function next(){
  // ici on veut avancer une photo donc on l'incrémente
  //des qu'on arrive a la derniere photo tab.length on reprend a la
  // premiere photo index=0;
	state.index++;
	if(state.index==tab.length){
		state.index=0;
	}
	display();// et on rappele toujours l'affichage
}
function previous(){
  //ici on veut reculer une photo donc on le décrémente
  //des qu'on arrive a la derniere photo en arriére on revient a la
  //premiere photo d'ou le tab.length-1
	state.index--;
	if(state.index==-1){
		state.index=tab.length-1;
	}
	display();//et toujour rappeler l'affichage
}
function playPause(){
  //ici on veut faire jouer les photos alors on dit si le timer==null
  //alors on peut lancer le timer avec le bouton avec un intervalle
  // d'une seconde et on change le nom du bouton pendant la lecture
	if(timer==null){
	timer=setInterval(next, 1000);
	$("#play").text("pause");
    }
    else if(timer!=null){
      //lorsque ldéfilement marche donc le timer != null donc on peut
      //l'arreter avec le clearInterval et comme il est en stop ça veut
      //dire que le timer esyt null donc on peut le relancer dou le 
      //changement de nom du bouton
    	clearInterval(timer);
    	timer=null;
    $("#play").text("play");
    }  
}
function random(){
  //icic on veut que la machine lance des photos aléatoire on utulise
  //la méthode math.floor qui fait l'arrondi d'un nombre et le 
  //math.randomqui donne des chiffres de o a 1
	let val;
	do{
		val=Math.floor(Math.random()* 8);
	}
  //si la valeur est egal a un index du tableau tu peux l'afficher
    while(state.index==val);
    state.index=val;
    display();//et on affiche toujours nos photos
}
function clavier(event){
  // ici on utulise on a utulisé une nouvelle fonction en utulisant
  //les touches du clavier on le fait avec  keycode
  switch(event.keyCode){
  	case 37:
  	next();
  	break;
  	case 38:
  	random();
  	break;
  	case 32:
  	playPause();
  	break;
  	case 39:
  	previous();
  	break;
  }
}

$(function(){
  $("#play").on("click", playPause);
  $("#avancer").on("click", next);
  display();
  $("#reculer").on("click", previous);
  $("#aleatoire").on("click", random);
  $(document).on("keydown");// ici on utulise les touches du clavier
  //pour faitre l'évenement avec keydown sur tout le document
});

