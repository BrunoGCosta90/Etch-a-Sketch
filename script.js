let gridSize;
let currentMode = "black";
const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', () => {
    colorClear();
});

const btnEraser = document.querySelector('.eraser').addEventListener('click', () => {
    currentMode = "eraser";
})

const btnBlack = document.querySelector('.black');
btnBlack.addEventListener('click', () => {
    currentMode = "black";
})

const btnRandom = document.querySelector('.random');
btnRandom.addEventListener('click', () => {
    currentMode = "random";
})

const btnGreyscale = document.querySelector('.greyscale');
btnGreyscale.addEventListener('click', () => {
    currentMode = "greyscale";
})

const grid = document.createElement('div');
grid.classList.add("grid");
document.querySelector('.main').appendChild(grid);

let pickSquares = document.querySelectorAll('.squares');

function createGrid(num){
    for (let i = 0; i < num; i++){
        for (let j = 0; j < num; j++){
            const squares = document.createElement('div');
            squares.classList.add("squares");
            squares.addEventListener('mouseover', changeColor);
            squares.addEventListener('mousedown', changeColor);
            grid.appendChild(squares);
        }
    }
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    
    
    pickSquares = document.querySelectorAll('.squares');
    
    //colorEvent();

}

createGrid(16);

function colorEvent(){

    pickSquares.forEach((e) => {
        e.addEventListener('mouseover', () => {
            e.style.backgroundColor = currentColor;
        })
    })
}


function changeColor(e){
    
    if(currentMode === "black"){
        e.target.style.backgroundColor = 'black';
    } else if (currentMode === "random"){
        e.target.style.backgroundColor = "#" + 
        (Math.floor(Math.random()*16777215).toString(16));
    } else if (currentMode === "eraser"){
        e.target.style.backgroundColor = 'white';
    } else if(currentMode === "greyscale"){
        e.target.style.backgroundColor = 'black';
       if(e.target.style.opacity < 1.0){
           //e.target.style.backgroundColor = 'white';
           e.target.style.opacity = (parseFloat(e.target.style.opacity) || 0) + 0.1;
       }
    }
    
}

function colorClear(){
    pickSquares.forEach((e) => {
        e.style.backgroundColor = 'white';
    })
    //createGrid(gridSize);
}



const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');

slider.onmousemove = (e) => {
    sliderValue.textContent = e.target.value + 'x' + e.target.value;
}

slider.onmouseup = (e) => {
    colorClear();
    createGrid(slider.value);
}
