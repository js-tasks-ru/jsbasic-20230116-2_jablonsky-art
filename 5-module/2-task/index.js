function toggleText() {
  let btn = document.querySelector(".toggle-text-button");
  btn.addEventListener("click", (event) => {
    let target = event.target.closest(".toggle-text-button");

    if (!target) return;

    let txt = document.querySelector("#text");
    txt.hidden = !txt.hidden;
  });
}
