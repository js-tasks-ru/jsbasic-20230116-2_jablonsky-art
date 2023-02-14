function hideSelf() {
  let button = document.querySelector(".hide-self-button");
  button.addEventListener("click", function (event) {
    let target = event.target.closest("button");
    if (!target) return;
    target.hidden = true;
  });
}
