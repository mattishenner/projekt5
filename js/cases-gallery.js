const galleryElement = document.getElementById('gallery');
const createdCases = JSON.parse(localStorage.getItem("cases")) || []
let images = document.querySelectorAll('.gallery-img');

createdCases.forEach(function (item) {
  const imageToRemove = document.querySelectorAll(".tmp-gallery-image")[0]
  if (!imageToRemove) return
  galleryElement.removeChild(imageToRemove)

  const div = document.createElement("div")
  div.classList.add("gallery-img")

  const newImage = `
              <div class="progress-bar"></div>
              <img src="img/case-port-2.jpg" alt="Portræt af kunde 2" loading="lazy">
              <div class="content pre-slide-up">
                  <blockquote>
                      <i>"${item.quote}"</i>
                  </blockquote>
                  <cite>- ${item.author}</cite> <br>
                  <a href="case.html?id=${item.id}">Læs case ➔</a>
                  <div class="progressbar"></div>
              </div>
  `

  div.innerHTML = newImage;

  // galleryElement.appendChild(div)
  galleryElement.insertBefore(div, galleryElement.children[0])
  images = document.querySelectorAll('.gallery-img');
  images.forEach((image, index) => {
    image.addEventListener('click', () => {
      clearTimeout(progress);
      imgIndex = index;
      makeImageActive(imgIndex);
      progress = setTimeout(updateImage, transitionDuration * 1000);
    });
  });

})



let imgIndex = 0;
let progress;
const transitionDuration = 15; // sekunder


function makeImageActive(index) {
  const images = document.querySelectorAll('.gallery-img');
  const progressBarElements = document.querySelectorAll('.progress-bar');

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
  const images = document.querySelectorAll('.gallery-img');

  imgIndex++;
  if (imgIndex === images.length) imgIndex = 0;
  makeImageActive(imgIndex);

  clearTimeout(progress);
  progress = setTimeout(updateImage, transitionDuration * 1000);
}


images.forEach((image, index) => {
  image.addEventListener('click', () => {
    clearTimeout(progress);
    imgIndex = index;
    makeImageActive(imgIndex);
    progress = setTimeout(updateImage, transitionDuration * 1000);
  });
});

// Initial setup
makeImageActive(imgIndex);
progress = setTimeout(updateImage, transitionDuration * 1000);
