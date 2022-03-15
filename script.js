const container = document.createElement('div');
container.id = 'grid-container';
document.body.appendChild(container);

let divNum = 1
function createDivs() {
    let div = document.createElement("div");
    div.classList.add("grid-square");
    div.id = `${divNum}`;
    container.appendChild(div);
    divNum++;
}

for (let i = 0; i < 256; i++) {
    createDivs();
}

let gridSquares = document.querySelectorAll(".grid-square")

gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener('mouseover', (e) => {
        gridSquare.classList.add('colored');
    });
})