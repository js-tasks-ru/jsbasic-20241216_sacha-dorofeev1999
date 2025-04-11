import createElement from '../../assets/lib/create-element.js';
export default class StepSlider {
  constructor({ steps, value }) {
    this.steps = steps;
    this.value = value;
    this.sliderBlock();
    this.sliderChange();
    this.addSlider();
  }
  sliderBlock() {
    this.elem = createElement(`
      <div class="container">
  <div class="slider">
    <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value">2</span>
    </div>
    <div class="slider__progress" style="width: 50%;"></div>
    <div class="slider__steps">
      <span class="slider__step-active"></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</div>
  `);
    document.body.append(this.elem);
  }
  sliderChange() {
    let sliderDiv = document.querySelector(".slider");
    let sliderValue = document.querySelector(".slider__value");
    let sliderSteps = document.querySelector(".slider__steps");

    sliderDiv.addEventListener("click", (event)=> {
      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * 10;
      this.value = Math.round(approximateValue);
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

      sliderDiv.append(thumb);
      sliderDiv.append(progress);
    });
  }
  addSlider() {
    this.elem.addEventListener("click", (event) => {
      this.elem.dispatchEvent(new CustomEvent("slider-change", {
        detail: this.value,
        bubbles: true
      }));
      console.log(event.detail)

    });
  }
}
