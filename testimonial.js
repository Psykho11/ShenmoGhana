let slideIndex = 0;

const slides = document.querySelectorAll('.testimonial-slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Ensure the index is within bounds
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    // Update the testimonial container to show the correct slide
    const slideContainer = document.querySelector('.testimonial-container');
    const offset = -slideIndex * 100; // Move left by the width of one slide
    slideContainer.style.transform = `translateX(${offset}%)`;
}

// Automatic Slide Change
setInterval(() => {
    showSlide(slideIndex + 1);
}, 3000);  // Change every 3 seconds

// Optional: If you want manual control (e.g., using buttons)
document.querySelector('.next').addEventListener('click', () => showSlide(slideIndex + 1));
document.querySelector('.prev').addEventListener('click', () => showSlide(slideIndex - 1));

// Initially display the first slide
showSlide(slideIndex);
