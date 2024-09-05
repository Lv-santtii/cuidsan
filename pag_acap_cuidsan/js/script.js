let currentIndex = 0;
const visibleSlides = 4;

function updateSliderPosition() {
    const slider = document.querySelector('.slider');
    const offset = currentIndex * -100 / visibleSlides;
    slider.style.transform = `translateX(${offset}%)`;
}

function moveSlider() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIndex++;
    updateSliderPosition();

    if (currentIndex >= totalSlides - visibleSlides) {
        setTimeout(() => {
            currentIndex = 0;
            slider.style.transition = 'none';
            updateSliderPosition();
            setTimeout(() => {
                slider.style.transition = 'transform 1s ease-in-out';
            }, 50);
        }, 1000);
    }
}

setInterval(moveSlider, 2000);