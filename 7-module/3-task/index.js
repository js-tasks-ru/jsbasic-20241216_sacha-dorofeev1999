export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.sliderBlock();
    this.sliderChange();
  }
  sliderBlock() {
    let slider = document.createElement('DIV');
    slider.classList.add('slider');
    slider.insertAdjacentHTML("beforeend", `
    <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value">2</span>
    </div>

    <div class="slider__progress" style="width: 50%;"></div>

    <div class="slider__steps">
      <span class="slider__step-active"></span>
    </div>
  `);
    let stepsNum = slider.querySelector('.slider__steps');
    for (let index = 0; index < this.steps - 1; index++) {
      stepsNum.insertAdjacentHTML('beforeEnd', `<span></span>`);
    }
    this.elem = slider;
  }
  sliderChange() {
    this.elem.addEventListener("click", (event)=> {
      let sliderDiv = event.target.closest('.slider');
      if (sliderDiv) {
        let thumb = this.elem.querySelector('.slider__thumb');
        let progress = this.elem.querySelector('.slider__progress');
        let sliderValue = document.querySelector(".slider__value");
        let sliderSteps = document.querySelector(".slider__steps");
        thumb.ondragstart = () => false;
        let left = event.clientX - this.elem.getBoundingClientRect().left;
        let leftRelative = left / sliderDiv.offsetWidth;
        let segments = this.steps - 1;
        let approximateValue = leftRelative * (segments);
        let value = Math.round(approximateValue);
        this.value = value;
        let valuePercents = this.value / segments * 100;
        thumb.style.left = `${valuePercents}%`;
        progress.style.width = `${valuePercents}%`;
        sliderValue.innerHTML = this.value;
        if ("slider__step-active") {
          for (let i = 0; i < this.steps; i++) {
            sliderSteps.children[i].classList.remove("slider__step-active");
          }
        }
        sliderSteps.children[this.value].classList.add("slider__step-active");

        let customEvent = new CustomEvent('slider-change', {
          detail: this.value,
          bubbles: true,
        });
        this.elem.dispatchEvent(customEvent);
      }

    });
  }
}
