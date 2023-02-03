function makeDiagonalRed(table) {
  const el1 = table.rows[0].cells[0];
  const el2 = table.rows[1].cells[1];
  const el3 = table.rows[2].cells[2];
  const el4 = table.rows[3].cells[3];
  const el5 = table.rows[4].cells[4];

  const array = [el1, el2, el3, el4, el5];
  for (let key of array) {
    key.style.backgroundColor = "red";
  }
}
