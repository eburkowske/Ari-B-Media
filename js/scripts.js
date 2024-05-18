document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slider img");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0";
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 15000);
  showSlide(currentIndex);
});
