(function () {
  var hero = document.querySelector(".project-hero");
  if (!hero) return;

  var images = JSON.parse(hero.getAttribute("data-images") || "[]");
  var imageEl = hero.querySelector(".project-hero-image");
  var prevButton = hero.querySelector(".project-hero-nav.prev");
  var nextButton = hero.querySelector(".project-hero-nav.next");
  var currentIndex = 0;

  function showSlide(index) {
    currentIndex = (index + images.length) % images.length;
    imageEl.src = images[currentIndex];
  }

  // The "revealed" class also goes on <body> so the paper tint can
  // cover the masthead and footer, not just the hero itself.
  function setRevealed(isRevealed) {
    hero.classList.toggle("revealed", isRevealed);
    document.body.classList.toggle("revealed", isRevealed);
  }

  function reveal() {
    setRevealed(true);
  }

  // Clicking the image toggles: first click brings it forward, clicking
  // again sends it back behind the title — fully back to the original
  // state, including resetting to the first slide.
  function toggleReveal() {
    var next = !hero.classList.contains("revealed");
    setRevealed(next);
    if (!next) {
      showSlide(0);
    }
  }

  // While the title is still in front, the first prev/next click only
  // brings the image forward — it doesn't advance the slide yet.
  function handleNav(direction) {
    if (!hero.classList.contains("revealed")) {
      reveal();
      return;
    }
    showSlide(currentIndex + direction);
  }

  if (prevButton) prevButton.addEventListener("click", function () { handleNav(-1); });
  if (nextButton) nextButton.addEventListener("click", function () { handleNav(1); });
  if (imageEl) imageEl.addEventListener("click", toggleReveal);
}());
