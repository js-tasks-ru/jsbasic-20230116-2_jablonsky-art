function highlight(table) {
  // for (let key of table.querySelectorAll("[data-available]")) {
  //   let td = key.getAttribute("data-available");

  //   let tr = key.parentElement;
  //   let res = td
  //     ? tr.classList.add("available")
  //     : tr.classList.add("unavailable") || tr.classList.add("hidden");
  // }
  for (let tr of table.children[1].rows) {
    // для каждой строки tr таблицы
    let available = tr.cells[3];
    if (available.hasAttribute("data-available"))
      switch (available.dataset.available) {
        case "true":
          tr.classList.add("available");
          break;
        case "false":
          tr.classList.add("unavailable");
      }
    else tr.hidden = true;

    let gender = tr.cells[2].textContent;
    switch (gender) {
      case "m":
        tr.classList.add("male");
        break;
      case "f":
        tr.classList.add("female");
    }
    // Добавить inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18.
    let age = +tr.cells[1].textContent;
    if (age < 18) tr.style.textDecoration = "line-through";
  }
}
