import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modal;
    this.open();
    this.setTitle();
    this.setBody();
  }

  open() {
    this.modal = createElement(
     `
     <div class = "modal">
       <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
        <h3 class="modal__title"></h3>
        </div>
        <div class="modal__body"></div>
      </div>
      </div>
      `)
    document.body.append(this.modal);
    let body = document.querySelector("body")
    body.classList.add("is-modal-open")
  }

  setTitle(title) {
    this.modal = document.querySelector(".modal__title")
    this.modal.innerText = title
  }

  setBody(node) {
    this.modal = document.querySelector(".modal__body")
    this.modal.innerHTML = ""
    this.modal.append(node)
}
}
