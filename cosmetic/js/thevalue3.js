$(function () {
  $(".left").fadeOut();
  $(".bar, .left").hover(function(){
    $(".left").stop().slideDown();
  }, function(){
    $(".left").stop().slideUp();
  }); /* bar호버 */
});
