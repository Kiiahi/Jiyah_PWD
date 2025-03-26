// Display a dynamic welcome message based on the time of day
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header h1');
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        header.textContent = 'Good Morning! Welcome to Character Creation!';
    } else if (currentHour < 18) {
        header.textContent = 'Good Afternoon! Welcome to Character Creation!';
    } else {
        header.textContent = 'Good Evening! Welcome to Character Creation!';
    }

    // Add hover effects to images in the image row
    const images = document.querySelectorAll('.image-row img');

    images.forEach((img) => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)'; // Slightly enlarge the image
            img.style.transition = 'transform 0.3s ease';
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)'; // Reset the image size
        });
    });

    // Add click feedback to navigation buttons
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            alert(`You clicked: ${link.textContent}`);
        });
    });

    // Preload images for better performance
    const imagePaths = [
        'images/image1.png',
        'images/image2.png',
        'images/image3.png',
    ];

    imagePaths.forEach((path) => {
        const img = new Image();
        img.src = path;
    });
});