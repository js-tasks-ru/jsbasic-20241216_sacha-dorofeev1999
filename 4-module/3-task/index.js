function highlight(table) {
  let trs = table.getElementsByTagName('tr');


  for (i = 0; i < trs.length; i++) {
    let cellAvaible = trs[i].cells[3];


    if (cellAvaible.dataset.available === "true") {
      trs[i].classList.add("available");
    } else if (cellAvaible.dataset.available === "false") {
      trs[i].classList.add("unavailable");
    }

    let cellFemale = trs[i].cells[2];

    if (cellFemale.textContent == "m") {
      trs[i].classList.add("male");
    } else if (cellFemale.textContent == "f") {
      trs[i].classList.add("female");
    }

    let cellAge = trs[i].cells[1];

    if (Number(cellAge.textContent) < 18) {
      trs[i].style.textDecoration = "line-through";
    }

    let cellHiden = trs[i].cells[3];

    if (!cellHiden.hasAttribute("data-available")) {
      trs[i].hidden = true;
    }
  }
}
