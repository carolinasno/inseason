console.log('hi hi hi');

$(window).scroll(function(){

  var windowScroll = $(this).scrollTop();
  console.log(windowScroll);


  var inseasonLogo = $('.inseason-logo');

  inseasonLogo.css({
    'transform' : 'translate(0px, '+ windowScroll /3 +'%)'
  });

  var inseasonLink = $('#inseason-link');
  var farmersMarketLink = $('#farmersmarket-link');

  inseasonLink.css({
    'transform' : 'translate(0px, '+ windowScroll /4 +'%)'
  });

  inseasonLink.click(function(){
    $('html, body').animate({
      scrollTop: $('.inseason-view').offset().top},
      'slow');
  });

  farmersMarketLink.css({
    'transform' : 'translate(0px, '+ windowScroll /4 +'%)'
  });

  farmersMarketLink.click(function(){
    $('html, body').animate({
      scrollTop: $('.inseason-view').offset().top},
      'slow');
  });

});
