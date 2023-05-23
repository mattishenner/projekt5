const images = document.querySelectorAll('.gallery-img');
let imgIndex = 0;
let progress;

const galleryElement = document.getElementById('gallery');
const progressBarElements = document.querySelectorAll('.progress-bar');

function makeImageActive(index) {
  // Remove active class from all images
  images.forEach((image, i) => {
    image.classList.remove('active');
    progressBarElements[i].style.transition = 'none';
    progressBarElements[i].style.width = '0';
  });

  // Add active class to the new image
  images[index].classList.add('active');

  // Delay for the CSS change to take effect
  setTimeout(() => {
    progressBarElements[index].style.transition = 'width 10s linear';
    progressBarElements[index].style.width = '90%';
  }, 20);
}

function updateImage() {
  imgIndex++;
  if (imgIndex === images.length) imgIndex = 0; // Loop back to the first image
  makeImageActive(imgIndex);

  // Set up the next image change
  clearTimeout(progress);
  progress = setTimeout(updateImage, 10000); // Change every 3 seconds
}

// Initial setup
makeImageActive(imgIndex);
progress = setTimeout(updateImage, 10000);

// Event listeners for images
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    clearTimeout(progress); // Clear existing timer
    imgIndex = index; // Set current image to the clicked one
    makeImageActive(imgIndex); // Make the clicked image active
    progress = setTimeout(updateImage, 10000); // Restart the slideshow
  });
});
