document.addEventListener('DOMContentLoaded', function(){
    createContainer(18);
    console.log('hi');
})

//Creating the function that will return the grid container based on the size.

function createContainer(size){
    let container = document.querySelector('#container');

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

//Creating the squares for the divs inside the container dinamically.
    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = 'red';
        container.insertAdjacentElement("beforeend", div);
    }
}



 