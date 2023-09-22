const container = document.querySelector('#container');
// const rows = document.querySelector(".row");
// const cols = document.querySelection(".col");

function makeGrid(number){
for(let i=0; i<number * number; i++){ //create rows
    
        const create = document.createElement('div');
        // create.classList.add('square');
        // const square = document.querySelectorAll('.square');
        // create.style.display = "grid";
        container.style.gridTemplateColumns = `repeat(${number}, auto)`;
        container.style.gridTemplateRows = `repeat(${number}, auto)`;
        container.style.width = `960px`;
        container.style.height = `960px`;
        create.addEventListener('mouseover', () => create.style.backgroundColor = 'black');
        container.appendChild(create);
        
    
}
}

function createRow(number){
for (let i=0; i<number; i++){ 
    const create = document.createElement('div');
    create.classList.add('row');
    create.style.g
}
}


// Function to clear  the grid to take new data
function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}


const button = document.querySelector('.number')
button.addEventListener('click', () => {
    const newNumber = prompt("Enter a number: ")
    clearGrid();
    makeGrid(newNumber);
})
