const header = document.getElementById("header");
const snoContainer = document.getElementById("sno");
const bodyContainer = document.getElementById("body-container");

const columns = 26;
rows = 50;
for (let i = 1; i <= columns; i++) {
  const headCell = document.createElement("div");
  headCell.className = "head-cell";
  headCell.innerText = String.fromCharCode(64 + i);
  header.appendChild(headCell);
}

for (let i = 1; i <= rows; i++) {
  const snoCell = document.createElement("div");
  snoCell.className = "sno-cell";
  snoCell.innerText = i;
  snoContainer.appendChild(snoCell);
}

//every row has 26 cell inside it..that's why we create 26 cells of every row..that's
// we run a column for loop inside row forloop
for (let row = 1; row <= rows; row++) {
  // creat a row
  const rowElement = document.createElement("div");
  rowElement.className = "row";

  for (let col = 1; col <= columns; col++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.contentEditable= true;
    // col=1 => "A1","A2"
    cell.id = `${String.fromCharCode(64 + col)}${row}`;
    rowElement.appendChild(cell);
    cell.addEventListener("focus",onFocusCell);
  }
  bodyContainer.appendChild(rowElement);
}



