const container = document.createElement('div');
container.id = 'grid-container';
document.body.appendChild(container);

let pixelsPerSide;
let totalPixels;
let gridSquares;
let divNum = 1;

function createDivs() {
    let div = document.createElement("div");
    div.classList.add("grid-square");
    div.id = `${divNum}`;
    div.style.width = 960 / pixelsPerSide;
    div.style.height = 960 / pixelsPerSide;
    container.appendChild(div);
    divNum++;
}

function generateCanvas() {
    pixelsPerSide = prompt("How many pixels do you want per side? Up to 100: ");
    if (pixelsPerSide > 100) {
        pixelsPerSide = 100;
    }
    totalPixels = pixelsPerSide * pixelsPerSide;
    container.style = `grid-template-columns: repeat(${pixelsPerSide}, 1fr);`
    for (let i = 0; i < totalPixels; i++) {
        createDivs();
    }
    gridSquares = document.querySelectorAll(".grid-square")
    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', (e) => {
            gridSquare.classList.add('colored');
        });
    });
}

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', (e) => {
    gridSquares.forEach(square => {
        square.remove();
    });
    generateCanvas();
});

generateCanvas();
