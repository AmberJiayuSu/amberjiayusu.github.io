
function changeSlide(direction, button) {

  const carousel = button.closest('.gallery-container');
  
  const slides = carousel.querySelectorAll('.gallery-slide');
  const totalSlides = slides.length;

  let currentSlideIndex = Array.from(slides).findIndex(slide => slide.style.display === "block");

  slides[currentSlideIndex].style.display = "none";


  currentSlideIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;

  slides[currentSlideIndex].style.display = "block";
}



