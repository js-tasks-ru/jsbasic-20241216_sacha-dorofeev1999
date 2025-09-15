import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modalBlock();
    this.open();
    this.setTitle();
    this.setBody();
    this.closeBtn();
    this.closeEscape();
  }

  modalBlock() {
    this.elem = createElement(`
      <div class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title">
          </h3>
        </div>
        <div class="modal__body">fsdfsdfsdsd
        </div>
      </div>
    </div>
      `);
  }

  open() {
    document.body.classList.add("is-modal-open");
    document.body.append(this.elem);
  }

  setTitle(title) {
    let modalTitle = document.querySelector(".modal__title");


    modalTitle.innerText = title;
  }

  setBody(node) {
    let modalBody = document.querySelector(".modal__body");


    modalBody.innerHTML = "";
    modalBody.append(node);
  }

  closeBtn() {
    let modalClose = document.querySelector(".modal__close");


    modalClose.addEventListener("click", (event) => {
      this.close();
    });
  }

  closeEscape() {
    document.addEventListener("keydown", (event) => {
      if(event.code === "Escape") {
        this.close();
      }
    });
  }

  close(event) {
    document.body.classList.remove("is-modal-open");
    this.elem.remove();
    document.removeEventListener("keydown", event);
}
}
