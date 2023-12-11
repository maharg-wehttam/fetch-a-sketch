const gridSize = document.querySelector('#grid-size');
const randomColor = document.querySelector('#random-color');
const fadeToBlack = document.querySelector('#fade-to-black');
const newGrid = document.querySelector('#new-grid');
const etch = document.querySelector('#etch');
let size;
let pixelSize;
let pixelColor;

function randomRGB() {
    return Math.floor(Math.random() * 256);
}

function removeGrid() {
    etch.innerHTML = '';    
}

newGrid.addEventListener('click', () => {
    removeGrid();
    size = gridSize.value;
    pixelSize = 500/size;
    pixelColor = 240;
    for (let i = 0; i < size; i++) {
        let sketchContainer = document.createElement('div');
        sketchContainer.style.margin = '0';
        sketchContainer.style.width = '500px';
        sketchContainer.style.height = `${pixelSize}px`;
        sketchContainer.style.display = 'flex';
        sketchContainer.style.flexDirection = 'row';
        etch.appendChild(sketchContainer);
        for (let j = 0; j < size; j++) {
            let sketchPixel = document.createElement('div');
            sketchPixel.className = 'sketch';
            sketchPixel.style.width = `${pixelSize}px`;
            sketchPixel.style.height = `${pixelSize}px`;
            sketchPixel.style.backgroundColor = `rgb(${pixelColor},${pixelColor},${pixelColor})`;
            sketchContainer.appendChild(sketchPixel);
        };
    };
});

document.addEventListener('click', (e) => {
    let btn = e.target;
    if(btn.className==='af-btns' && btn.value==='false' && btn.id==='random-color') {
        btn.style.backgroundColor = 'blue';
        btn.style.color = 'white';
        btn.value = 'true'
        if (fadeToBlack.value==='true') {
            fadeToBlack.style.backgroundColor = 'lightgrey';
            fadeToBlack.style.color = 'black';
            fadeToBlack.value = 'false';
        }
    } else if (btn.className==='af-btns' && btn.value==='false' && btn.id==='fade-to-black') {
        btn.style.backgroundColor = 'blue';
        btn.style.color = 'white';
        btn.value = 'true';
        if (randomColor.value==='true') {
            randomColor.style.backgroundColor = 'lightgrey';
            randomColor.style.color = 'black';
            randomColor.value = 'false';
        }
    } else if (btn.className==='af-btns') {
            btn.style.backgroundColor = 'lightgrey';
            btn.style.color = 'black';
            btn.value = 'false';
    }

})

document.addEventListener('mouseover', (e) => {
    if(e.target.className==='sketch') {
        let dot = e.target;
        if (randomColor.value === 'true') {
            dot.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
        } else if (fadeToBlack.value === 'true') {
            let rgb = dot.style.backgroundColor.substring(4, dot.style.backgroundColor.length-1)
                                                .replace(/ /g, '')
                                                .split(',');
            pixelColor = +rgb[0] - 24;
            dot.style.backgroundColor = `rgb(${pixelColor},${pixelColor},${pixelColor})`; 
        } else {
            dot.style.backgroundColor = 'black';
        }

    }    
})