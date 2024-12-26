$(document).ready(function(){

  $(".reviews-slider").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
  });


  $('.menu').click(function(){
    $('.ham-nav').slideToggle(1000);
  })
});