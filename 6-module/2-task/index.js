import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  constructor(product) {
    this.arr = product;
    this.elem;
    this.create();
    this.btnGenerate();
  }
  create() {
    this.elem = document.createElement("div");
    this.elem = createElement(`
<div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${this.arr.image}" class="card__image" alt="product">
        <span class="card__price">€${this.arr.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.arr.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>`);
    document.body.append(this.elem);
  }

  btnGenerate() {
    this.elem.addEventListener("click",(event) => {
      this.elem.dispatchEvent(new CustomEvent("product-add",{
        detail:  this.arr.id,
        bubbles: true
      }))
    })
  }
}

