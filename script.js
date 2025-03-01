document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;

    // Show first slide initially
    slides[currentSlide].classList.add('active');

    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    // Previous slide
    prevBtn.addEventListener('click', () => {
        currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    // Next slide
    nextBtn.addEventListener('click', () => {
        currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });

    // Auto-adjust iframe heights based on content
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.onload = () => {
            try {
                const height = iframe.contentWindow.document.body.scrollHeight;
                iframe.style.height = `${height}px`;
            } catch (e) {
                console.log('Cannot access iframe content due to same-origin policy');
            }
        };
    });
}); 