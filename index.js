const container = document.querySelector('#container');
const color = document.querySelector('.colors');
const black = document.querySelector('.black');
const erase = document.querySelector('.erase');
const clear = document.querySelector('.clear');
const slider = document.querySelector('.slider');
let para = document.querySelector('p');
let mousedown = false;
// document.body.addEventListener('dragstart', () => mousedown = true);
// document.body.addEventListener('mouseup', () => mousedown = false);

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
        create.addEventListener('mousedown', changeColor);
        //Listener on container mousedown/mouseup events to enable click and hover at the same time,
        container.addEventListener('mousedown', () => mousedown = true);
        container.addEventListener('mouseup', () => mousedown = false);
        container.addEventListener('dragstart', event => {
            event.preventDefault();
          });
          
          container.addEventListener('drop', event => {
            event.preventDefault();
          })

       create.addEventListener('mouseenter', changeColor);
        container.appendChild(create);
    }
}

slider.addEventListener('change', () => {
let square = slider.value
para.textContent = slider.value + " x " + slider.value;
eraseGrid();
makeGrid(square)});


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

//Used button to enter Number of Squares, but figured a slider would be more user-friendly. Kept the button for references
//Numbers Button
// const button = document.querySelector('.number')
// button.addEventListener('click', () => {
//     const newNumber = +prompt("Enter a number: ")
//     if (newNumber === undefined || newNumber === null) return alert("Please select a number");
//     else if (!Number.isInteger(newNumber)) return alert("Please select an Integer number")
//     else if (newNumber > 100) return alert("Number is too large, will crash your browser");
//     else{
//     eraseGrid();
//     makeGrid(newNumber);
//     }
// })

function changeColor(event){
    if (event.type === 'mouseenter' && !mousedown) return
    else if (mode === rainbowMode)
event.target.style.backgroundColor = rainbowMode();
else if (mode === 'blackMode')
    event.target.style.backgroundColor = 'black';
else if (mode === "eraseMode")
    event.target.style.backgroundColor = 'white';
}
