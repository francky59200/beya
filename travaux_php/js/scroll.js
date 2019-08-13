"user strict"
$(window).scroll(function() {
    let y=$(window).scrollTop();
        if(y > 400){
            $('#scroll1').slideDown("slow");
        }
        if(y < 400) {
            $('#scroll1').hide();
               }
});
$(window).scroll(function() {
  let h = $(".logo").innerHeight();
    let y=$(window).scrollTop();
        if(y > h){
          $(".menuburgeur").addClass("fixmenu");
        }
        if(y < h) {
          $(".menuburgeur").removeClass("fixmenu");

               }
});
