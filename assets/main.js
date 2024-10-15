
let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll('.gallery-slide');
  slides[currentSlide].style.display = "none"; 

  currentSlide += direction;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  slides[currentSlide].style.display = "block";
}



