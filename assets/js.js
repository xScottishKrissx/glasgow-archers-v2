$(document).ready(function() {
console.log("Jquery is working")

  $(window).on("scroll", function() {
      var scroll = $(window).scrollTop();
      var windowWidth  = $(window).width();
      //console.log(scroll);

      if (scroll >= 10 && windowWidth > 575.98) {
        $(".nav-wrapper").css("top","-142px");
        $(".slider").css("margin-top","14rem");

      }else if(scroll >= 10 && windowWidth < 575.98){
       $(".nav-wrapper").css("top","-261px");
       $(".slider").css("margin-top","14rem");

       $(".navbar-toggler").on("click",function(){
         $(".nav-wrapper").css("top","-261px");
         $(".slider").css("margin-top","14rem");
       })

     }else if(scroll <= 10 && windowWidth <575.98){

       $(".slider").css("margin-top","29rem");
       $(".nav-wrapper").css("top","-0px");
     }else if (scroll <= 10 && windowWidth > 991.98) {
         $(".slider").css("margin-top","24rem");
         $(".nav-wrapper").css("top","-0px");
     }

     else{
        $(".nav-wrapper").css("top","-0px");
        $(".slider").css("margin-top","17rem");
     }

/*

*/
/* Can Handle this with css instead

     if (scroll >= 30 && windowWidth > 575.98) {
       $(".navbar .container #myNav ul li").css("padding","1rem")
       //console.log("Window Width");
     }else{
       $(".nav-item").css("padding","1rem")
     }
*/
  });

  $(".login-current").on("click", function(){
    $(".new-member-area").css("display","none");
    $(".existing-member-area").css("display","flex");
  })
  $(".login-new").on("click", function(){
    $(".new-member-area").css("display","flex");
    $(".existing-member-area").css("display","none");
  })

  logOut = document.querySelector(".logout-btn");
  logOut.onclick = function(){myFunction()};
  function myFunction(){
    document.querySelector(".new-member-area").style.display="none";
    document.querySelector(".existing-member-area").style.display="none";
    //console.log("log");
  }






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
