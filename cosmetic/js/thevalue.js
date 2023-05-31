$(function () {
  $(".carousel1").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
  });/*  banner 부분 슬라이드 */
  $(".carousel2").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
  }); /* 고객리뷰부분 슬라이드 */
  $(".sub").fadeOut();
  $(".bottom > li ").hover(function(){
    $(this).find(".sub").stop().slideDown();
  },function(){
    $(".sub").stop().slideUp();
  }); /* 서브메뉴 호버 */
});
