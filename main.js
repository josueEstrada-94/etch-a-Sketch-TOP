document.addEventListener('DOMContentLoaded', function(){
    createContainer(16);

    let popup = document.querySelector('#popup');
    popup.addEventListener('click', function(){
        let size = getSize();
        createContainer(size);
    })
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
        div.style.backgrounsdColor = 'red';
        container.insertAdjacentElement("beforeend", div);
    }
}

//Creating a function that ask the user for the size of the container.

function getSize(){
    let input = prompt('What will be the size of the board?')
    let message = document.querySelector('#message');
    if (input === ''){
        message.innerHTML = 'Please provide a number';
    }
    else if(input < 0 || input > 100){
        message.innerHTML = 'Please provide a number between 1 and 100'
    }
    else{
        message.innerHTML = 'Now you can play!';
        return input;
    }
}

 