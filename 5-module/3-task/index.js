function initCarousel() {
  const carousel = document.querySelector('.carousel');
  let carouselInner = carousel.querySelector(".carousel__inner");
  const buttonRight = carousel.querySelector('.carousel__arrow_right');
  const buttonLeft = carousel.querySelector('.carousel__arrow_left');
  let countSlide = carousel.children.length;
  let slidewidth = carouselInner.offsetWidth;
  let count = 0;


  buttonLeft.style.display = "none";

  carousel.addEventListener("click", (event)=> {
    if (event.target.className === "carousel__arrow carousel__arrow_right") {

      if (countSlide > 0 && countSlide < 4) {
        countSlide--;
        count -= slidewidth;
        initCarousel();
        return;
      }
    }
    else if (event.target.className === "carousel__arrow carousel__arrow_left") {

      if (countSlide >= 0 && countSlide < 3) {
        countSlide++;
        count += slidewidth;
        initCarousel();
        return;
      }
    }
  });

  function initCarousel() {
    carouselInner.style.transform = `translateX(${count}px)`;

    if (countSlide === 0) {
      buttonRight.style.display = "none";
    } else if (countSlide > 0) {
      buttonRight.style.display = "";
    }

    if (countSlide < 3) {
      buttonLeft.style.display = "";
    } else if (countSlide === 3) {
      buttonLeft.style.display = "none";
    }
  }
}
