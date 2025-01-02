function handleParallaxFade() {
    document.querySelectorAll('.parallax-fade img').forEach(img => {
      let rect = img.getBoundingClientRect();
      let opacity = 1 - (rect.top / window.innerHeight) * 1.5;
      img.style.opacity = Math.max(opacity, 0);
    });
  }
  function handleParallaxSlideUp() {
    const maxisImage = document.querySelector('.parallax-slide-up');
    const maxisRect = maxisImage.getBoundingClientRect();
    if (maxisRect.top < window.innerHeight - 100) {
      maxisImage.style.opacity = 1;
      maxisImage.style.transform = 'translateY(0)';
    }
  }
  document.addEventListener('scroll', function () {
    handleParallaxFade();
    handleParallaxSlideUp();
  });
  