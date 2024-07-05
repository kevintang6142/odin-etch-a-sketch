const body = document.querySelector("body");

const button = document.querySelector("button");
button.addEventListener("click", e => {
    let gridSize;
    do {
        gridSize = prompt("Enter a valid grid size (1-100): ");
    } while (isNaN(gridSize) || gridSize != parseInt(gridSize) || gridSize < 1 || gridSize > 100)
    createGrid(gridSize);
})

const grid = document.createElement("div");
grid.id = "grid";

createGrid(16);

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