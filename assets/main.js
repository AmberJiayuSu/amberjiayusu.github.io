(function () {
    var hamburger = document.querySelector('.hamburger');
    var nav = document.querySelector('.masthead_nav');
    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        hamburger.classList.toggle('is-open', open);
        hamburger.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('is-open');
            hamburger.classList.remove('is-open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.masthead_menu')) {
            nav.classList.remove('is-open');
            hamburger.classList.remove('is-open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}());

function changeSlide(direction, button) {

  const carousel = button.closest('.gallery-container');
  
  const slides = carousel.querySelectorAll('.gallery-slide');
  const totalSlides = slides.length;

  let currentSlideIndex = Array.from(slides).findIndex(slide => slide.style.display === "block");

  slides[currentSlideIndex].style.display = "none";


  currentSlideIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;

  slides[currentSlideIndex].style.display = "block";
}



