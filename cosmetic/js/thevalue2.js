$(function () {
  $(".left").fadeOut();
  $(".bar, .left").hover(function(){
    $(".left").stop().slideDown();
  }, function(){
    $(".left").stop().slideUp();
  }); /* bar호버 */
  $(".carousel3").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
  });/*  banner 슬라이드 */
});
