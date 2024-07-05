const body = document.querySelector("body");
const grid = document.createElement("div");
grid.id = "grid";

let gridSize = 16;
createGrid(gridSize);

function createGrid(gridSize){
    grid.innerText = "";
    let square;
    const squareSize = 500 / gridSize;
    for (let i = 0; i < gridSize ** 2; i++) {
        square = document.createElement("div");
        square.className = "square";
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener("mouseenter", e => {
            e.target.style.backgroundColor = "black";
        })
        grid.appendChild(square);
    }
    body.appendChild(grid);
}