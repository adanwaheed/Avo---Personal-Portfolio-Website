let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${-(slideIndex - 1) * 100}%)`;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex - 1].className += " active";
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

// Initialize the carousel to show the first slide
showSlides(slideIndex);