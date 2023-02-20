import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  #slides;
  #elem;
  constructor(slides) {
    this.#slides = slides;
    this.#elem = document.createElement("div");
    this.#renderHTML();
    this.#plusBtn();
    this.#moveSlider();
  }

  get elem() {
    return this.#elem;
  }

  #tamplate() {
    let slides =
      `<div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </div>
  <div class="carousel__arrow carousel__arrow_left">
    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
  </div><div class="carousel__inner">` +
      this.#slides
        .map(
          (el) =>
            `<div class="carousel__slide" data-id=${el.id}>
<img src="/assets/images/carousel/${
              el.image
            }" class="carousel__img" alt="slide">
<div class="carousel__caption">
<span class="carousel__price">€${el.price.toFixed(2)}</span>
<div class="carousel__title">${el.name}</div>
<button type="button" class="carousel__button">
<img src="/assets/images/icons/plus-icon.svg" alt="icon">
</button>
</div>
</div>`
        )
        .join("");
    `</div>`;
    return slides;
  }

  #renderHTML() {
    this.#elem.classList.add("carousel");
    this.#elem.innerHTML = this.#tamplate();
  }

  #plusBtn() {
    this.#elem.addEventListener("click", (e) => {
      if (e.target.closest(".carousel__button")) {
        const customEvent = new CustomEvent("product-add", {
          detail: e.target.closest(".carousel__slide").dataset.id,
          bubbles: true,
        });
        this.#elem.dispatchEvent(customEvent);
      }
    });
  }

  #moveSlider() {
    let caruselInner = this.#elem.querySelector(".carousel__inner");
    let btnRigth = this.#elem.querySelector(".carousel__arrow_right");
    let btnLeft = this.#elem.querySelector(".carousel__arrow_left");
    let count = 1;
    let position = 0;
    let index = 0;

    index == 0
      ? (btnLeft.style.display = "none")
      : (btnLeft.style.display = "");

    this.#elem.addEventListener("click", (e) => {
      if (e.target.closest(".carousel__arrow_right")) {
        let size = caruselInner.offsetWidth;
        index += 1;
        position -= size * count;
        caruselInner.style.transform = `translateX(${position}px)`;

        index == this.#slides.length - 1
          ? (btnRigth.style.display = "none")
          : (btnRigth.style.display = " ");
        if (index != 0) {
          return (btnLeft.style.display = "");
        }
        return;
      }
      if (e.target.closest(".carousel__arrow_left")) {
        let size = caruselInner.offsetWidth;
        position += size * count;
        caruselInner.style.transform = `translateX(${position}px)`;

        if (position == 0) {
          return (btnLeft.style.display = "none");
        }
        return;
      }
    });
  }
}
