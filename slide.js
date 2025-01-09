document.addEventListener('DOMContentLoaded', () => {
    // Handle the general slideshow for .slide1
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide1');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);  // Slideshow interval for .slide1

    // Now handle the testimonial carousel
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    let testimonialIndex = 0;

    function showTestimonialSlide(index) {
        testimonialSlides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextTestimonialSlide() {
        testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
        showTestimonialSlide(testimonialIndex);
    }

    // Set an interval for the testimonials slideshow (optional)
    setInterval(nextTestimonialSlide, 4000);  // Testimonial slideshow interval
    showTestimonialSlide(testimonialIndex);  // Show the first testimonial initially
});
