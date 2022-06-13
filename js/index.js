const containerDiv = document.querySelector('.container')

for (i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.toggle('grid');
    div.classList.add(`${i}`);
    containerDiv.append(div);
}

function fillGrid(e) {
    this.classList.toggle('clickedGrid')
}

const grid = document.querySelectorAll('.grid')
grid.forEach(square => square.addEventListener('click', fillGrid))