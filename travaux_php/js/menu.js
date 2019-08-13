"use strict";
let verif = 0;

function burgeurCross() {
  if (verif == 0 ) {
    $(".menu").slideToggle("slow", function() {
      $(".hamburgeurCross").html("<i class='fas fa-times'></i>");
      verif++;
    });
  } else {
      $(".menu").slideToggle("slow", function() {
        $(".hamburgeurCross").html("<i class='fas fa-bars'></i>");
        verif=0;
      });
  }
}


function cacheLi() {
  $(this).children("ul").toggle();
}

function responsive(){
   if (window.matchMedia("(min-width:1024px)".matches)){
     $(".menulivreDor").children("ul").slideUp();
     $(".menuTarif").children("ul").slideUp();
     }
   else {
     $(".menulivreDor").children("ul").slideUp();
     $(".menuTarif").children("ul").slideUp();
   }

}
$(function() {
  $(".hamburgeurCross").on("click", burgeurCross);
  $(".menuTarif").on('click', cacheLi);
  $(".menulivreDor").on('click', cacheLi);
  responsive();
  $(window).resize(function(){
  responsive();
});
});
