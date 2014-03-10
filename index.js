$(document).ready(function(){ 
 //INSERT CODE HERE
console.log("JS loaded");

 //QUESTION 1
    function Dog(){}
    Dog.prototype.bark=function(){
        return 'woof';
    };
    function ShibaInu(){
    }
    ShibaInu.prototype.constructor=Dog.prototype.constructor;
    ShibaInu.prototype.constructor=ShibaInu;
    ShibaInu.prototype.bark=function(){
    return 'much wow very javascript';
     };
 //QUESTION 3
 	$(".secondbutton").click(function(){
 		$(".secondheading").html("Penguins are the best!!!").css("color","turquoise");
 	});

 //QUESTION 4
    $("#task4").click(function(){
      $("#hipcat").css('-webkit-filter', 'blur(3px)');
    });

 //QUESTION 5

 $(".button").click(function(){
    $(".wheel").css('-webkit-animation-play-state', 'running');
    $("#wheel1").css('-webkit-animation-play-state', 'running');
    $("#wheel2").css('-webkit-animation-play-state', 'running');
 });

 //QUESTION 6
 $(".nyancat").click(function() {
    $(".nyancat").animate({
    left: "+=1200"
  }, 10000, function() {
  });

  $(".rainbows").animate({
    left: "0",
    width: "+=1200"
  }, 10000, function() {
  });

 });

});
