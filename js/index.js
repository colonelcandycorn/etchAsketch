const containerDiv = document.querySelector('.container');
const slider = document.querySelector('.slider');
const gridText = document.querySelector('.gridText');
const replacementDiv = document.createElement('div');
const clearGridbutton = document.querySelector('#clearGrid')

replacementDiv.classList.add('container');

var gridPercentage = 5.787;

for (i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.toggle('grid');
    div.classList.add(`${i}`);
    containerDiv.append(div);
}

var grid = document.querySelectorAll('.grid');
grid.forEach(square => square.addEventListener('mouseover', fillGrid));

function fillGrid(e) {
    this.classList.add('clickedGrid')
    this.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},
                                      ${Math.floor(Math.random() * 255)},
                                      ${Math.floor(Math.random() * 255)})`
}

function buildGrid(num) {
    grid.forEach(square => containerDiv.removeChild(square))
    gridPercentage = ((864-(num * 4)) / 8.64) / num;
    for (i = 0; i < num * num; i++) {
        let div = document.createElement('div');
        div.classList.toggle('grid');
        div.classList.add(`${i}`);
        div.style.flexBasis = `${gridPercentage}%`;
        console.log(div.style.flexBasis)
        containerDiv.append(div);
    }
    grid = document.querySelectorAll('.grid');
    grid.forEach(square => square.addEventListener('mouseover', fillGrid));
}

slider.oninput = function() {
    gridText.textContent = `Grid Size: ${this.value} x ${this.value}`
    buildGrid(this.value)
}

clearGridbutton.addEventListener('click', function() {
    let clickedGrid = document.querySelectorAll('.clickedGrid');
    clickedGrid.forEach(square => square.style.backgroundColor = '');
})