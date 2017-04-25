$(document).ready(function(){
  $('section').fadeIn(500).css('display','block');
});




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
    $('.orbs, .walking, .portfolio,  h1, .fa-moon-o, .fa-sun-o, #eye1, #eye2').toggle();
  });
});





// $(document).ready(function(){
//   window.sr = ScrollReveal();
//   sr.reveal('section', { duration: 2000 });
// });










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




// $(document).ready(function(){
//
//   var modal = document.querySelector('.modal');
//   var btn = document.querySelector('#hamburger');
//
//   btn.onclick = function() {
//     modal.style.display = "flex";
//   }
//
//   window.onclick = function(event){
//     if(event.target == modal){
//       modal.style.display = "none";
//     };
//   };
// });





// MY LIGHTBOX SCRIPT (DOESN'T WORK!!!!)
// $(document).ready(function(){
//
//   $('.lightbox_trigger').click(function(e){
//
//     e.preventDefault();
//
//     var image_href = $(this).attr("href");
//
//     if($('#mylightbox').length > 0){
//       $('#content').html('<img src=' + image_href + '" />');
//
//       $('#mylightbox').show();
//     }
//
//     else{
//       var lightbox =
//       '<div id="mylightbox">' + '<p>Click to close</p>' + '<div id="content">' + '<img src="' + image_href + '" />' + '</div>';
//
//       $('body').append(lightbox);
//     }
//
//     console.log('hey');
//
//   });
//
//   $('#mylightbox').on('click', function(){
//     $('#mylightbox').hide();
//   });
// });







// ----------------------------------------------------------------


$(document).ready(function(){
  lightbox.option({
    'disableScrolling' : true
  });
});











// $(document).ready(function(){
//
//   $('#co').click(function() {
//     $('html, body').animate({
//             scrollTop: $('#coffee').offset().top -80
//           }, 700);
//   });
//
//   $('#gr').click(function() {
//     $('html, body').animate({
//             scrollTop: $('#goodreads').offset().top -80
//           }, 700);
//   });
//
//   $('#np').click(function() {
//     $('html, body').animate({
//             scrollTop: $('#nonprofit').offset().top -80
//           }, 700);
//   });
//
//   $('#tu').click(function() {
//     $('html, body').animate({
//             scrollTop: $('#third-uncle').offset().top -80
//           }, 700);
//   });
//
// });
