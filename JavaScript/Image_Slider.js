const images = [
    "images/Group photo/wardha.jpg", // Replace with your image paths
    "images/Group photo/gallery 1.jpeg",
    "images/Group photo/gallery 3.jpg",
    "images/Group photo/gallery 6.jpeg"
];

let currentIndex = 0;
let interval;

const imgElement = document.querySelector('.Home_Images img');
const navigationSpans = document.querySelectorAll('.Navigation_Button_Animation span');
const buttonLeft = document.getElementById('N_L');
const buttonRight = document.getElementById('N_R');

// Function to update the image and highlight the respective span with animation
function updateImage(index) {
    imgElement.style.opacity = 0; // Start fade-out
    setTimeout(() => {
        imgElement.src = images[index]; // Change the image source
        imgElement.style.opacity = 1; // Fade-in the new image

        navigationSpans.forEach((span, spanIndex) => {
            span.style.backgroundColor = spanIndex === index ? '#2c91d6' : 'transparent';
        });
    }, 600); // Delay for fade-out effect
}

// Function to move to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
}

// Function to move to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
}

// Function to handle span click
function handleSpanClick(index) {
    currentIndex = index;
    updateImage(currentIndex);
}

// Event listeners for navigation buttons
buttonLeft.addEventListener('click', prevImage);
buttonRight.addEventListener('click', nextImage);

// Event listeners for span clicks
navigationSpans.forEach((span, index) => {
    span.addEventListener('click', () => handleSpanClick(index));
});

// Auto-switch images every 3 seconds
function startAutoSwitch() {
    interval = setInterval(nextImage, 3000);
}

function stopAutoSwitch() {
    clearInterval(interval);
}

// Start the auto-switch when the page loads
startAutoSwitch();

// Stop auto-switching on hover and resume when not hovered
const homeImagesDiv = document.querySelector('.Home_Images');
homeImagesDiv.addEventListener('mouseover', stopAutoSwitch);
homeImagesDiv.addEventListener('mouseout', startAutoSwitch);

// Initialize the first image
updateImage(currentIndex);

// CSS for animation (can be added dynamically or in a stylesheet)
const style = document.createElement('style');
style.innerHTML = `
    .Home_Images img {
        transition: opacity 0.5s ease-in-out;
    }
`;
document.head.appendChild(style);
