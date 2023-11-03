//Creating the function that will return the grid container based on the size.
function createContainer(size){
    let container = document.querySelector('#container');

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}
console.log('hi');

createContainer(32);