$(document).ready(function(){
  $('.section-header').click(function(){
    $(this).next().slideToggle();
    $(this).children('.section-header h2:nth-child(2), .section-header h2:nth-child(3)').toggle();
    // $(this).parent().siblings().slideToggle();
  });
});



$(document).ready(function(){

  window.sr = ScrollReveal();
  sr.reveal('header, .section-header, .box', { duration: 1500 });
});
