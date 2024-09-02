// Carousel 
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const cards = Array.from(track.children);
    const dots = Array.from(document.querySelectorAll('.dot'));
    const totalCards = cards.length;
    const cardWidth = cards[0].getBoundingClientRect().width + 30;
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -(currentIndex % totalCards) * cardWidth;
        track.style.transform = `translateX(${offset}px)`;

        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex % dots.length].classList.add('active');
    }

    function moveToNextCard() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
    }

    function moveToPrevCard() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarousel();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            moveToNextCard();
        } else if (event.key === 'ArrowLeft') {
            moveToPrevCard();
        }
    });

    let startX = 0;
    let isDragging = false;

    track.addEventListener('mousedown', (event) => {
        startX = event.pageX;
        isDragging = true;
    });

    track.addEventListener('mousemove', (event) => {
        if (!isDragging) return;
        const moveX = event.pageX - startX;
        if (moveX > 50) {
            moveToPrevCard();
            isDragging = false;
        } else if (moveX < -50) {
            moveToNextCard();
            isDragging = false;
        }
    });

    track.addEventListener('mouseup', () => {
        isDragging = false;
    });

    track.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    track.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
        isDragging = true;
    });

    track.addEventListener('touchmove', (event) => {
        if (!isDragging) return;
        const moveX = event.touches[0].clientX - startX;
        if (moveX > 50) {
            moveToPrevCard();
            isDragging = false;
        } else if (moveX < -50) {
            moveToNextCard();
            isDragging = false;
        }
    });

    track.addEventListener('touchend', () => {
        isDragging = false;
    });

    updateCarousel();
});




// Contact section
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || subject === "") {
        alert("Please fill out the required fields.");
        return;
    }

    console.log({
        name: name,
        email: email,
        subject: subject,
        message: message
    });

    alert("Your message has been sent successfully!");

    document.getElementById('contactForm').reset();
});