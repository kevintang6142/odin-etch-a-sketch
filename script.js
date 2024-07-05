const body = document.querySelector("body");

const button = document.querySelector("button");
const p = document.querySelector("p");
button.addEventListener("click", e => {
    let gridSize;
    do {
        gridSize = prompt("Enter a valid resolution (1-100): ");
    } while (isNaN(gridSize) || gridSize != parseInt(gridSize) || gridSize < 1 || gridSize > 100)
    createGrid(gridSize);
})

const grid = document.createElement("div");
grid.id = "grid";

createGrid(16);

function createGrid(gridSize){
    p.textContent = `Current Resolution: ${gridSize} x ${gridSize}`;
    grid.innerText = "";
    const squareSize = 500 / gridSize;
    for (let i = 0; i < gridSize ** 2; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.opacity = 0;
        square.style.backgroundColor = "black";
        square.addEventListener("mouseover", e => {
            square.style.opacity = +square.style.opacity + 0.1;
        })
        grid.appendChild(square);
    }
    body.appendChild(grid);
}