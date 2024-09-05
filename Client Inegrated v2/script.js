// --------------------carousel functionality--------------------

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Auto-play slides
setInterval(nextSlide, 3000);

// Initial display
showSlide(slideIndex);


// --------------------- model ---------------------

// Get the modal element
const modal = document.getElementById('unavailableModal');

// Get the button that opens the modal
const manualButton = document.querySelector('.booking-button:nth-child(2)');

// Get the <span> element that closes the modal
const closeButton = document.querySelector('.close-button');

// When the user clicks the button, open the modal
manualButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// When the user clicks on <span> (x), close the modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


