"use strict";

let image;
let titre;
let description;
let ctnLien;
let srcLien;
let boutton;
let timer = null;
let index = 0;
let tab = [{
    image: "img/slides/soins-et-sens.jpg",
    titre: "Bien-être et relaxation à Lille",
    description: "Praticienne en massage ,Réflexologie et soins énergétiques, je vous fais voyager dans le pays du bien-être.",
    ctnLien: "Découvrez mes prestations",
    srcLien: "index.html"
  },
  {
    image: "img/slides/relaxation.jpg",
    titre: "Massage bien-être et réflexologie plantaire",
    description: "Je vous propose des massage bien-être pour le corps, les pieds, le dos ainsi que le visage.",
    ctnLien: "En savoir plus",
    srcLien: "apropos.html"
  },
  {
    image: "img/slides/massage.jpg",
    titre: "Vous souhaitez prendre un rendez-vous ?",
    description: "Je vous reçois au cabinet et me déplace en entreprise ou à domicile.",
    ctnLien: "Contactez-moi",
    srcLien: "contact.html"
  }
];

function play() {
  timer = setInterval(next, 4000);
  display();
}

function pause() {
  clearInterval(timer);
  timer = null;
  display();
}


function next() {
  pause();
  if (index < tab.length - 1) {
    index++;
    display();
  } else {
    index = 0;
    display();
  }
  play();
}

function previous() {
  pause();
  if (index > 0) {
    index--;
    display();
  } else {
    index = tab.length - 1;
    display();
  }
  play();
}

function slide1() {
  pause();
  index = 0;
  display();
  play();
}

function slide2() {
  pause();
  index = 1;
  display();
  play();
}

function slide3() {
  pause();
  index = 2;
  display();
  play();
}

function display() {
  $(".slide img").attr("src", tab[index].image);
  $(".slide h2").text(tab[index].titre);
  $(".slide p").text(tab[index].description);
  $(".slide a").text(tab[index].ctnLien);
  $(".slide a").attr("href", tab[index].srcLien);

  if (index == 0) {
    $("#un").css("color", "white");
    $("#deux").css("color", "rgba(255, 255, 255, 0.4");
    $("#trois").css("color", "rgba(255, 255, 255, 0.4");
  } else if (index == 1) {
    $("#un").css("color", "rgba(255, 255, 255, 0.4");
    $("#deux").css("color", "white");
    $("#trois").css("color", "rgba(255, 255, 255, 0.4");
  } else {
    $("#un").css("color", "rgba(255, 255, 255, 0.4");
    $("#deux").css("color", "rgba(255, 255, 255, 0.4");
    $("#trois").css("color", "white");
  }
}

function eventClavier(event) {
  switch (event.keyCode) {
    case 37:
      previous();
      break;
    case 39:
      next();
      break;
    case 32:
      pause();
      break;
  }
}

function responsive2() {
  let h = $(".slide img").innerHeight();
  $(".slide").css("height", h);
}

$(function() {
  play();
  $("#precedent").on("click", previous);
  $("#suivant").on("click", next);
  $("#un").on("click", slide1);
  $("#deux").on("click", slide2);
  $("#trois").on("click", slide3);
  $(".slide").on("mouseenter", pause);
  $(".slide").on("mouseleave", play);
  $(document).on("keydown", eventClavier);
  responsive2();
  $(window).resize(function() {
    responsive2();
  });
});
