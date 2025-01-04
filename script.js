function handleParallaxFade() {
    document.querySelectorAll('.parallax-fade img').forEach(img => {
      let rect = img.getBoundingClientRect();
      let scrollPosition = window.scrollY || window.pageYOffset;
      let opacity = 1 - (scrollPosition / 500); 
      img.style.opacity = Math.max(opacity, 0);
      img.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    });
  }
function handleParallaxSlide() {
    const elements = document.querySelectorAll('.parallax-slide-up');
  
    elements.forEach(element => {
      let scrollPosition = window.scrollY || window.pageYOffset;
      let windowHeight = window.innerHeight;
  
      let elementOffset = element.offsetTop - windowHeight;
      let progress = (scrollPosition - elementOffset) / windowHeight;
  
      if (progress >= 0 && progress <= 1) {
        element.style.opacity = 1;
        element.style.transform = `translateY(${80 - (progress * 100)}px)`;
      } else if (progress < 0) {
        element.style.opacity = 0;
        element.style.transform = `translateY(100px)`;
      } else {
        element.style.opacity = 0;
        element.style.transform = `translateY(-100px)`;
      }
    });
  }
  
  let scrollTimeout;
  document.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      handleParallaxFade();
      handleParallaxSlide();
    }, 10);
  });
  
  window.addEventListener('load', () => {
    handleParallaxFade();
    handleParallaxSlide();
  });
  document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.parallelogram-track');
    const containerWidth = document.querySelector('.parallelogram-container').offsetWidth;
    const parallelogramWidth = 65; // Width of one parallelogram + gap
  
    const count = Math.ceil(containerWidth / parallelogramWidth) * 2;
  
    track.innerHTML = ''; // Clear existing parallelograms
  
    for (let i = 0; i < count; i++) {
      const para = document.createElement('div');
      para.classList.add('parallelogram');
      track.appendChild(para);
    }
  });  