function toggleText() {
  let btn = document.querySelector(".toggle-text-button");


  let text = document.getElementById("text");


  btn.onclick = () => {
    if (text.getAttribute('hidden') == null) {
      text.hidden = true;
    } else {
      text.hidden = false;
    }
  };
}
