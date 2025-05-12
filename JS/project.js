document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    if (sliderContainer && slider && prevButton && nextButton) {
        let counter = 0;
        const slideWidth = slider.clientWidth;

        function goToSlide(slideIndex) {
            slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
            counter = slideIndex;
        }

        nextButton.addEventListener('click', () => {
            if (counter < slider.children.length - 1) {
                goToSlide(counter + 1);
            } else {
                goToSlide(0); // Loop back to the first slide
            }
        });

        prevButton.addEventListener('click', () => {
            if (counter > 0) {
                goToSlide(counter - 1);
            } else {
                goToSlide(slider.children.length - 1); // Loop to the last slide
            }
        });

        // Make the slider responsive on resize
        window.addEventListener('resize', () => {
            const newSlideWidth = slider.clientWidth;
            slider.style.transform = `translateX(-${newSlideWidth * counter}px)`;
        });
    }
});