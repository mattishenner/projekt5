const galleryElement = document.getElementById('gallery');
const images = document.querySelectorAll('.gallery-img');
const progressBarElements = document.querySelectorAll('.progress-bar');

let imgIndex = 0;
let progress;
const transitionDuration = 15; // sekunder


function makeImageActive(index) {
  images.forEach((image, i) => {
    image.classList.remove('active');
    progressBarElements[i].style.transition = 'none';
    progressBarElements[i].style.width = '0';
  });

  images[index].classList.add('active');

  setTimeout(() => {
    progressBarElements[index].style.transition = `width ${transitionDuration}s linear`;
    progressBarElements[index].style.width = '90%';
  }, 20);
}

function updateImage() {
  imgIndex++;
  if (imgIndex === images.length) imgIndex = 0;
  makeImageActive(imgIndex);

  clearTimeout(progress);
  progress = setTimeout(updateImage, transitionDuration*1000); // Change every 3 seconds
}


images.forEach((image, index) => {
  image.addEventListener('click', () => {
    clearTimeout(progress); 
    imgIndex = index; 
    makeImageActive(imgIndex); 
    progress = setTimeout(updateImage, transitionDuration*1000); 
  });
});

// Initial setup
makeImageActive(imgIndex);
progress = setTimeout(updateImage, transitionDuration*1000);
