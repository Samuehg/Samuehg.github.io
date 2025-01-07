const carouselTrack = document.querySelector('.carousel-track');
const slides = Array.from(carouselTrack.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function updateCarousel(position) {
    carouselTrack.style.transform = `translateX(-${position}%)`;
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateCarousel(currentSlide * 100);
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateCarousel(currentSlide * 100);
});
