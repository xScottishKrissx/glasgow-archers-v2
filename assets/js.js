$(document).ready(function() {
console.log("Jquery is working")

  $(window).on("scroll", function() {
      var scroll = $(window).scrollTop();
      //console.log(scroll);

      if (scroll >= 10) {

        $(".nav-wrapper").css("position","fixed");
        $(".nav-wrapper").css("top","-16vh");
        $("#myNav ul li").css("padding","1rem");
      }else{
        $(".nav-wrapper").css("position","relative");
        $(".nav-wrapper").css("top","0px");
        $("#myNav ul li").css("padding","2rem");
      }
  });



});
