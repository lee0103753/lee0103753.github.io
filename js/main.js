$(function(){
   let wed =$(".wed").offset().top;
   let de =$(".design").offset().top;
   let me =$(".me").offset().top;
   console.log(wed); 
   $("#main").click(function(){
    $("html , body").animate({
        scrollTop:0
    },500)
   });
   $("#wed").click(function(){
    $("html , body").animate({
        scrollTop:wed
    },500)
   });
   $("#design").click(function(){
    $("html , body").animate({
        scrollTop:de
    },500)
   });
   $("#Me").click(function(){
    $("html , body").animate({
        scrollTop:me
    },500)
   });
})