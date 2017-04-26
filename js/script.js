// $(document).ready(function(){
//   $('section').fadeIn(500).css('display','block');
// });




// Face Animation
$(document).ready(function(){

  $(document).on('opened', '.remodal', function () {
    $('.text, #first').delay(500).fadeIn();
  });

  $('.next').click(function(){
    $(this).parent().fadeOut(500);
    $(this).parent().next().delay(500).fadeIn(500);
  });

  $('.prev').click(function(){
    $(this).parent().fadeOut(500);
    $(this).parent().prev().delay(500).fadeIn(500);
  });

  $('.remodal-close3').click(function(){
    $('.text, .blurb').fadeOut(600);
  });
});



$(document).ready(function(){
  $('.section-header').click(function(){
    // Open this section, close all other sections
    $(this).next().slideToggle(500);
    $('.content').not($(this).next()).slideUp(500);
    // Add black and italic classes to this section, remove those classes from the other sections
    $(this).toggleClass('selected italic');
    $('.section-header').not($(this)).removeClass('selected italic');
    // Toggle the up/down arrows on this section, return the arrows to default state on the other sections
    $(this).children('.section-header h2:nth-child(3), .section-header h2:nth-child(4)').toggle();
    $('.section-header h2:nth-child(3)').not($(this).children('.section-header h2:nth-child(3)')).show();
    $('.section-header h2:nth-child(4)').not($(this).children('.section-header h2:nth-child(4)')).hide();
  });
});



$(document).ready(function(){
  $('#light-switch').click(function(){
    $('body').toggleClass('black');
    $('header').toggleClass('transparent');
    $('.orbs, .portfolio,  h1, .fa-moon-o, .fa-sun-o, #eye1, #eye2').toggle();
    $('.walking').toggleClass('opacity-one');
  });
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
    // Remove selected class
    $('.section-header').removeClass('selected italic');
  });
});



$(document).ready(function(){
  lightbox.option({
    'disableScrolling' : true
  });
});
