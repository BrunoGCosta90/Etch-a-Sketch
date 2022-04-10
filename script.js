const grid = document.createElement('div');
grid.classList.add("grid");
document.body.appendChild(grid);

for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        const squares = document.createElement('div');
        squares.classList.add("squares");
        grid.appendChild(squares);
    }
}

let colorEvent = document.querySelectorAll('.squares');

colorEvent.forEach((e) => {
    e.addEventListener('mouseover', () => {
        e.style.backgroundColor = 'black';
    })
})
    
