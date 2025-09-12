import createElement from '../../assets/lib/create-element.js';


export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.render();
    this.addEventListeners();
    this.sliderChange()
  }
  render() {
    let slider = document.createElement('DIV');
    slider.classList.add('slider');
    slider.insertAdjacentHTML("beforeend", `
    <div class="slider__thumb" style="left: 75%;">
      <span class="slider__value">${this.value}</span>
    </div>
    <div class="slider__progress" style="width: 75%;"></div>
    <div class="slider__steps">
      <span class="slider__step-active"></span>
      ${"<span></span>".repeat(this.steps - 1)}
    </div>
  `);
    this.elem = slider;
  }
  
  addEventListeners() {
      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      let sliderSteps = this.elem.querySelector(".slider__steps");


      globalThis.sliderSteps = sliderSteps;
      globalThis.thumb = thumb;
      globalThis.progress = progress;
      thumb.addEventListener("pointerdown",(event)=>{
      thumb.ondragstart = () => false;
      event.preventDefault()
      this.elem.classList.add("slider_dragging");
        document.addEventListener("pointermove",this.MouseMove)
        document.addEventListener("pointerup",this.mouseUp)

      })
      this.MouseMove = (event) => {
        let sliderValue = document.querySelector(".slider__value");
        let left = event.clientX - this.elem.getBoundingClientRect().left;
        let leftRelative = left / this.elem.offsetWidth;


        if (leftRelative < 0) {
          leftRelative = 0;
        }

        if (leftRelative > 1) {
          leftRelative = 1;
        }
        let segments = this.steps - 1;
        let approximateValue = leftRelative * (segments);
        let value = Math.round(approximateValue);
        this.value = value;
        let leftPercents = leftRelative * 100;


        globalThis.thumb.style.left = `${leftPercents}%`;
        globalThis.progress.style.width = `${leftPercents}%`;
        sliderValue.innerHTML = this.value;
        if ("slider__step-active") {
          for (let i = 0; i < this.steps; i++) {
            globalThis.sliderSteps.children[i].classList.remove("slider__step-active");
          }
        }
        globalThis.sliderSteps.children[this.value].classList.add("slider__step-active");

        let customEvent = new CustomEvent('slider-change', {
          detail: this.value,
          bubbles: true,
        });
        this.elem.dispatchEvent(customEvent);
        }

      
      this.mouseUp = (event) => {
        let segments = this.steps - 1;
        let finalPercents = (100 / segments) * this.value;

        globalThis.thumb.style.left = `${finalPercents}%`;
        globalThis.progress.style.width = `${finalPercents}%`;
            if ("slider__step-active") {
              for (let i = 0; i < this.steps; i++) {
                globalThis.sliderSteps.children[i].classList.remove("slider__step-active");
              }
            }
            globalThis.sliderSteps.children[this.value].classList.add("slider__step-active");
            
        let customEvent = new CustomEvent('slider-change', {
          detail: this.value,
          bubbles: true,
        });

        this.elem.dispatchEvent(customEvent);
        event.preventDefault()
        this.elem.classList.remove('slider_dragging');
        document.removeEventListener('pointermove', this.MouseMove);
        document.removeEventListener('pointerup', this.mouseUp);
      }
  }

  sliderChange() {
    this.elem.addEventListener("click", (event)=> {
      let sliderDiv = event.target.closest('.slider');


      if (sliderDiv) {
        let sliderValue = document.querySelector(".slider__value");
        let left = event.clientX - this.elem.getBoundingClientRect().left;
        let leftRelative = left / sliderDiv.offsetWidth;
        let segments = this.steps - 1;
        let approximateValue = leftRelative * (segments);
        let value = Math.round(approximateValue);
        this.value = value;
        let valuePercents = this.value / segments * 100;


        globalThis.thumb.style.left = `${valuePercents}%`;
        globalThis.progress.style.width = `${valuePercents}%`;
        sliderValue.innerHTML = this.value;
        if ("slider__step-active") {
          for (let i = 0; i < this.steps; i++) {
            sliderSteps.children[i].classList.remove("slider__step-active");
          }
        }
        globalThis.sliderSteps.children[this.value].classList.add("slider__step-active");

        let customEvent = new CustomEvent('slider-change', {
          detail: this.value,
          bubbles: true,
        });
        this.elem.dispatchEvent(customEvent);
      }
    });
  }
}
