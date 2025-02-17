/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */




export default class UserTable {
  constructor(rows) {
    this.arr = rows;
    this.elem = document.createElement('table');
    this.createElement();
    this.deleteElem();
  }

  createElement() {
    this.elem.insertAdjacentHTML(
      "afterbegin",
      `<table><thead><tr><td>Имя</td><td>Возвраст</td><td>Зарплата</td><td>Город</td></tr></thead><tbody>${this.arr.map(user =>`<tr><td>${user.name}</td><td>${user.age}</td><td>${user.salary}</td><td>${user.city}</td><td><button>X</button></td></tr>`).join("")}`);
    return this.elem;
  }

  deleteElem() {
    let btns = this.elem.querySelectorAll("button");
    for (let btn of btns) {
      btn.addEventListener("click", (event) =>
        event.target.closest("tr").remove()
      );
    }
  }

}








