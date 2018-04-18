$(document).ready(function() {
console.log("Jquery is working")

//scroll to top button logic
 function scrollToAnchor(aid) {
   var aTag = $("meta[name='" + aid + "']");
   $('html,body').animate({
     scrollTop: aTag.offset().top
   }, 300);
   console.log("Scroll End");
 }

 $(".scroll-to-top-btn").click(function() {
   scrollToAnchor('viewport');
 });

  $(window).on("scroll", function() {
      var scroll = $(window).scrollTop();
      var windowWidth  = $(window).width();
      console.log(scroll);

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

       $(".slider").css("margin-top","28rem");
       $(".nav-wrapper").css("top","-0px");
     }else if (scroll <= 10 && windowWidth > 991.98) {
         $(".slider").css("margin-top","19rem");
         $(".nav-wrapper").css("top","-0px");
     }

     else{
        $(".nav-wrapper").css("top","-0px");
        $(".slider").css("margin-top","17rem");
     }


//scroll to top button
     if ($(window).scrollTop() < 2300) {
       $(".scroll-to-top-btn").css("visibility","hidden");

     }else if($(window).scrollTop() > 2300){
         $(".scroll-to-top-btn").css("visibility","visible");
     };

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


  //Show Dropdown Menu on Hover
  $(".nav-item").hover(
    function(){
      $(this).children("div").addClass("show");
    }, function(){
      $(this).children("div").removeClass("show");
    }
  );

  //Change Dropdown Toggle Icon on Click
  $(".navbar-toggler").on( "click" , function(){
    console.log("Toggler Clicked");
    $(this).children("span").toggleClass("rotate").animate();
  }
  );

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
$(function() {
  $(".slider").swipe( {
    //Generic swipe handler for all directions
    swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
      $('.carousel').carousel('next')
      //console.log("Swipe");
    },
    swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
      $('.carousel').carousel('prev',{interval: 2000})
      //console.log("Swipe");
    }
  });

  //Set some options later
  $("#test").swipe( {fingers:2} );
});


});
