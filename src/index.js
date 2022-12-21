import $ from "jquery"

document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = $('.slide');
    const numSlides = slides.length;
  
    function showSlide(n) {
      slides.fadeOut(1000);
      slides.eq(n).fadeIn(1000);
    }

    function cycleSlides() {
      currentSlide = (currentSlide + 1) % numSlides;
      showSlide(currentSlide);
    }
  
    setInterval(cycleSlides, 5000);
    cycleSlides()
  });
  