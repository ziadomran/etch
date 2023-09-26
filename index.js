const container = document.querySelector('#container');
const color = document.querySelector('.colors');
const black = document.querySelector('.black');
const erase = document.querySelector('.erase');
const clear = document.querySelector('.clear');

let mode;

color.addEventListener("click", () => mode = rainbowMode)
black.addEventListener("click", () => mode ='blackMode')
erase.addEventListener("click", () => mode = 'eraseMode')
clear.addEventListener("click", () => { mode = 'clearMode'
    clearGrid() });

function makeGrid(number){
    for(let i=0; i<number * number; i++){ 
        const create = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${number}, auto)`; // Create "Number" number of columns
        container.style.gridTemplateRows = `repeat(${number}, auto)`; //create "Number" number of rows
        container.style.width = `960px`; //grid width 960px
        container.style.height = `960px`; //grid height 960px
        create.addEventListener('mouseover', changeColor);
        container.appendChild(create);
    }
}

function randomColor(){
    return Math.floor(Math.random() *256);
}
function rainbowMode(){
    return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

function clearGrid(){
    container.childNodes.forEach((node) => node.style.backgroundColor ='white');
}

// Function to clear  the grid to take new data
function eraseGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

//Numbers Button
const button = document.querySelector('.number')
button.addEventListener('click', () => {
    const newNumber = +prompt("Enter a number: ")
    if (newNumber === undefined || newNumber === null) return alert("Please select a number");
    else if (!Number.isInteger(newNumber)) return alert("Please select an Integer number")
    else if (newNumber > 100) return alert("Number is too large, will crash your browser");
    else{
    eraseGrid();
    makeGrid(newNumber);
    }
})

function changeColor(event){
    if (mode === rainbowMode)
event.target.style.backgroundColor = rainbowMode();
else if (mode === 'blackMode')
    event.target.style.backgroundColor = 'black';
else if (mode === "eraseMode")
    event.target.style.backgroundColor = 'white';
}
