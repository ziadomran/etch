const container = document.querySelector('#container');
// const rows = document.querySelector(".row");
// const cols = document.querySelection(".col");

function makeGrid(number){
    for(let i=0; i<number * number; i++){ 
        const create = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${number}, auto)`; // Create "Number" number of columns
        container.style.gridTemplateRows = `repeat(${number}, auto)`; //create "Number" number of rows
        container.style.width = `960px`; //grid width 960px
        container.style.height = `960px`; //grid height 960px
        create.addEventListener('mouseover', () => create.style.backgroundColor = 'black');
        container.appendChild(create);
    }
}

// Function to clear  the grid to take new data
function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function checkPrompt(str){
    if (str === undefined || str === null || isNaN(str))  return alert("Please select a number");
    else if (!Number.isInteger(str)) return alert("Please select an Integer number")
    else if (str > 100) return alert("Number is too large, will crash your browser");
    else return parseInt(str);
}

const button = document.querySelector('.number')
button.addEventListener('click', () => {
    const newNumber = +prompt("Enter a number: ")
    if (newNumber === undefined || newNumber === null) return alert("Please select a number");
    else if (!Number.isInteger(newNumber)) return alert("Please select an Integer number")
    else if (newNumber > 100) return alert("Number is too large, will crash your browser");
    else{
    clearGrid();
    makeGrid(newNumber);
    }
})
