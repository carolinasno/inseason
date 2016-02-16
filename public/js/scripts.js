console.log('hi hi hi');

$(window).scroll(function(){

  var windowScroll = $(this).scrollTop();
  console.log(windowScroll);


  var inseasonLogo = $('.inseason-logo');

  inseasonLogo.css({
    'transform' : 'translate(0px, '+ windowScroll /3 +'%)'
  });

  inseasonLogo.click(function(){
    // $('html, body').animate({
    //   scrollTop: $('.inseason-header').offset().top},
    //   'slow');
    $(window).scrollTop(0);
  });

  var inseasonLink = $('#inseason-link');
  var farmersMarketLink = $('#farmersmarket-link');
  var aboutLink = $('#about-inseason');

  inseasonLink.css({
    'transform' : 'translate(0px, '+ windowScroll /4 +'%)'
  });

  inseasonLink.click(function(){
    $('html, body').animate({
      scrollTop: $('.inseason-view').offset().top},
      'slow');
    // $(window).scrollTop(800);
  });

  farmersMarketLink.css({
    'transform' : 'translate(0px, '+ windowScroll /4 +'%)'
  });

  farmersMarketLink.click(function(){
    $('html, body').animate({
      scrollTop: $('.inseason-view').offset().top},
      'slow');
    // $(window).scrollTop(800);
  });

  aboutLink.css({
    'transform' : 'translate(0px, '+ windowScroll /4 +'%)'
  });

  aboutLink.click(function(){
    $('html, body').animate({
      scrollTop: $('.inseason-view').offset().top},
      'slow');
    // $(window).scrollTop(800);
  });

});
