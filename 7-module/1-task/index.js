import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.createRibbon();
    this.scroll();
    this.choice()
    this.elem;
  }

  createRibbon() {
    this.elem = document.createElement("div");
    this.elem.classList.add("ribbon");
    this.elem.insertAdjacentHTML("afterbegin",
      `
    <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </button>
    <nav class="ribbon__inner">
      ${this.categories.map(({id, name})=> `
      <a href="#" class="ribbon__item" data-id="${id}">${name}</a>
    `).join("")}
    </nav>
    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    `);
    document.body.append(this.elem);
  }

  scroll() {
    let ribbon = this.elem;
    let ribbonInner = document.querySelector(".ribbon__inner");
    let ribbonRight = ribbon.lastElementChild;
    let ribbonLeft = ribbon.firstElementChild;
    ribbonRight.classList.add("ribbon__arrow_visible");

    ribbon.addEventListener("click", (event)=> {
      if (event.target.classList.contains("ribbon__arrow_right")) {
        ribbonInner.scrollBy(350, 0);
        let scrollWidth = ribbonInner.scrollWidth;
        let scrollLeft = ribbonInner.scrollLeft;
        let clientWidth = ribbonInner.clientWidth;
        let scrollRight = scrollWidth - scrollLeft - clientWidth;
        if (scrollRight < 1) {
          ribbonRight.classList.remove("ribbon__arrow_visible");
        }
        if (scrollRight > 532) {
          ribbonLeft.classList.add("ribbon__arrow_visible");
        }
      }
      if (event.target.classList.contains("ribbon__arrow_left")) {
        ribbonInner.scrollBy(-350, 0);
        let scrollLeft = ribbonInner.scrollLeft;
        if (scrollLeft < 1) {
          ribbonLeft.classList.remove("ribbon__arrow_visible");
        }
        if (scrollLeft > 182) {
          ribbonRight.classList.add("ribbon__arrow_visible");
        }
      }
    });
  }

  choice() {
    this.elem.addEventListener("click", (event)=> {
      if (event.target.closest('.ribbon__inner')) {

        event.target.closest('[data-id]').classList.add("ribbon__item_active")
        event.target.closest('[data-id]').classList.remove("ribbon__item_active")
        console.log(event.target.closest('[data-id]'))
        event.preventDefault()


        this.elem.dispatchEvent(new CustomEvent("ribbon-select", {
          detail: event.target.closest('[data-id]').dataset.id,
          bubbles: true
        }));
      }
    })
  }
}
