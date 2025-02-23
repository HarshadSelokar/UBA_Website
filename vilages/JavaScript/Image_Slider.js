document.addEventListener('DOMContentLoaded', () => {
    const images = ['one', 'two', 'three', 'four'];
    const forwardButton = document.getElementById('Forward');
    const backwardButton = document.getElementById('Backward');
    let currentIndex = 0;
  
    function showImage(index, direction) {
      const currentImage = document.getElementById(images[currentIndex]);
      const newImage = document.getElementById(images[index]);
  
      currentImage.classList.remove('show');
      currentImage.classList.add(direction === 'forward' ? 'hide-left' : 'hide-right');
  
      newImage.classList.remove('hide-left', 'hide-right');
      newImage.classList.add('show');
  
      currentIndex = index;
    }
  
    document.getElementById(images[currentIndex]).classList.add('show');
  
    forwardButton.addEventListener('click', () => {
      const nextIndex = (currentIndex + 1) % images.length;
      showImage(nextIndex, 'forward');
    });
  
    backwardButton.addEventListener('click', () => {
      const nextIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(nextIndex, 'backward');
    });
  });
  