$(document).ready(function() {
console.log("Jquery is working")

  $(window).on("scroll", function() {
      var scroll = $(window).scrollTop();
      var windowWidth  = $(window).width();
      //console.log(scroll);

      if (scroll >= 10 && windowWidth > 575.98) {
        $(".nav-wrapper").css("top","-102px");

      }else if(scroll >= 10 && windowWidth < 575.98){
       $(".nav-wrapper").css("top","-221px");

     }else{
       $(".nav-wrapper").css("top","-0px");
     }

  });


/*
$(".boxes .container .row-1 >:nth-child(1)").hover(function(){
    $(".boxes").toggleClass("red");
});

$(".boxes .container .row-1 :nth-child(2)").hover(function(){
    $(".boxes").toggleClass("blue");
});

$(".boxes .container .row-2 :nth-child(1)").hover(function(){
    $(".boxes").toggleClass("red");
});

$(".boxes .container .row-2 :nth-child(2)").hover(function(){
    $(".boxes").toggleClass("blue");
});

$(".boxes .container .row-2 :nth-child(3)").hover(function(){
    $(".boxes").toggleClass("red");
});

$(".boxes .container .row-2 :nth-child(4)").hover(function(){
    $(".boxes").toggleClass("blue");
});

$(".boxes .container .row-2 :nth-child(5)").hover(function(){
    $(".boxes").toggleClass("red");
});

$(".boxes .container .row-2 :nth-child(6)").hover(function(){
    $(".boxes").toggleClass("blue");
});

$(".boxes .container .row-2 :nth-child(7)").hover(function(){
    $(".boxes").toggleClass("red");
});

$(".boxes .container .row-2 :nth-child(8)").hover(function(){
    $(".boxes").toggleClass("blue");
});

$(".boxes .container .row-2 :nth-child(9)").hover(function(){
    $(".boxes").toggleClass("red");
});

$(".boxes .container .row-2 :nth-child(10)").hover(function(){
    $(".boxes").toggleClass("blue");
});

*/
});
