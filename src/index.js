$(document).ready(function() {
    var currentSlide = 0;
    var slides = $('.slide');
    var numSlides = slides.length;
  
    function showSlide(n) {
      slides.fadeOut(1000);
      slides.eq(n).fadeIn(1000);
    }
  
    setInterval(function() {
      currentSlide = (currentSlide + 1) % numSlides;
      showSlide(currentSlide);
    }, 5000);
  });
  