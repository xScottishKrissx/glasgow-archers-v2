$(document).ready(function() {
console.log("Jquery is working")

  $(window).on("scroll", function() {
      var scroll = $(window).scrollTop();
      //console.log(scroll);

      if (scroll >= 15) {

        $(".nav-wrapper").css("position","fixed");
      }else{
        $(".nav-wrapper").css("position","relative");
      }
  });



});
