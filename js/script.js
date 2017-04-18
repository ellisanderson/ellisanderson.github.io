$(document).ready(function(){
  $('.section-header').click(function(){
    $(this).next().slideToggle(500);
    $(this).children('.section-header h2:nth-child(3), .section-header h2:nth-child(4)').toggle();
    $(this).toggleClass('black italic');
  });
});





$(document).ready(function(){
  $('#light-switch').click(function(){
    $('body').toggleClass('black');
    $('header').toggleClass('transparent');
    $('.orbs, .portfolio, .fa-moon-o, .fa-sun-o, #eye1, #eye2').toggle();
  });
});







$(document).ready(function(){
  window.sr = ScrollReveal();
  sr.reveal('.section-header', { duration: 2000 });
});










$(document).ready(function(){

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
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
  $('.left').click(function(){
    // Slide everything up to show original menu
    $('.content').slideUp('slow');
    // Toggle down/up arrows
    $('.section-header h2:nth-child(3)').show();
    $('.section-header h2:nth-child(4)').hide();
    // Remove black class
    $('.section-header').removeClass('black italic');
  });
});




$(document).ready(function(){

  var modal = document.querySelector('.modal');
  var btn = document.querySelector('#hamburger');

  btn.onclick = function() {
    modal.style.display = "flex";
  }

  window.onclick = function(event){
    if(event.target == modal){
      modal.style.display = "none";
    };
  };
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
