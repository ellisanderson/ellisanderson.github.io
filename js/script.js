$(document).ready(function(){
  $('.section-header').click(function(){
    $(this).next().slideToggle('fast');
    // $(this).next().toggle();
    $(this).children('.section-header h2:nth-child(2), .section-header h2:nth-child(3)').toggle();
    // $(this).parent().siblings().slideToggle();
    // $(this).toggleClass('fixed-section');
    // $('header').toggleClass('fixed-header');
  });
});








// This was to try and make the section headers fixed position on scroll
// $(document).ready(function(){
//   $(window).scroll(function(){
//       if ($(this).scrollTop() > 0) {
//           $('#design').addClass('fixed-section');
//       } else {
//           $('#design').removeClass('fixed-section');
//       }
//   });
// });








$(document).ready(function(){
  window.sr = ScrollReveal();
  sr.reveal('header, .section-header, .box', { duration: 1500 });
});








//
// $(document).ready(function(){
//
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//             $('#back-to-top').fadeIn("slow");
//         } else {
//             $('#back-to-top').fadeOut("fast");
//         }
//   });
//
//   $('#to-top-trigger').click(function () {
//         $("html, body").animate({
//             scrollTop: 0
//         }, 600);
//         return false;
//     });
// });











$(document).ready(function(){

  $(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
            $('#back-to-top2').fadeIn("slow");
        } else {
            $('#back-to-top2').fadeOut("fast");
        }
  });

  $('#back-to-top2').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});










$(document).ready(function(){
  $('#hamburger').click(function(){
    // Slide everything up to show original menu
    // $('.content').slideUp('slow');
    // $('.section-header h2:nth-child(2)').show();
    // $('.section-header h2:nth-child(3)').hide();

    // Initiate modal menu
    $('.modal').addClass('flex');
    $('.modal').click(function(){
      $(this).removeClass('flex');
    })
  });
});











$(document).ready(function(){
  lightbox.option({
    'disableScrolling' : true
  });
});











$(document).ready(function(){

  $('#co').click(function() {
    $('html, body').animate({
            scrollTop: $('#coffee').offset().top -80
          }, 700);
  });

  $('#gr').click(function() {
    $('html, body').animate({
            scrollTop: $('#goodreads').offset().top -80
          }, 700);
  });

  $('#np').click(function() {
    $('html, body').animate({
            scrollTop: $('#nonprofit').offset().top -80
          }, 700);
  });

  $('#tu').click(function() {
    $('html, body').animate({
            scrollTop: $('#third-uncle').offset().top -80
          }, 700);
  });

});
