$(document).ready(function(){
  $('.section-header').click(function(){
    $(this).next().slideToggle(1000);
    $(this).children('.section-header h2:nth-child(2), .section-header h2:nth-child(3)').toggle();
    // $(this).parent().siblings().slideToggle();
  });
});




$(document).ready(function(){
  window.sr = ScrollReveal();
  sr.reveal('header, .section-header, .box', { duration: 1500 });
});



$(document).ready(function(){

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn("slow");
        } else {
            $('#back-to-top').fadeOut("slow");
        }
  });

  $('#back-to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});



// $(document).ready(function(){
//   $('#back-to-top').click(function(){
//     $("html, body").animate({
//             scrollTop: 0
//         }, 600);
//         return false;
//     });
//   });
// });




$(document).ready(function(){
  lightbox.option({
    'disableScrolling' : true
  });
});




$(document).ready(function(){

  $('#co').click(function() {
    $('html, body').animate({
            scrollTop: $('#coffee').offset().top
          }, 700);
  });

  $('#gr').click(function() {
    $('html, body').animate({
            scrollTop: $('#goodreads').offset().top
          }, 700);
  });

  $('#np').click(function() {
    $('html, body').animate({
            scrollTop: $('#nonprofit').offset().top
          }, 700);
  });

  $('#fl').click(function() {
    $('html, body').animate({
            scrollTop: $('#freelance').offset().top
          }, 700);
  });

});
