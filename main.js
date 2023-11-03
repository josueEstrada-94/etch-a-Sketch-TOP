//global variable for color.
let color = 'black';
let click = false;

document.addEventListener('DOMContentLoaded', function(){
    createContainer(16);

    document.querySelector('body').addEventListener('click', function(e){
        if(e.target.tagName != 'BUTTON'){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = 'Now you can Draw!';
            }
            else{
                draw.innerHTML = 'You are not allowed to Draw'
            }
        }
    })

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

//Event that changes the color when the mouse pass over the container to black. 
        div.addEventListener('mouseover', colorDiv);
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
//Setting the functions that change the color, with black as the default.
//and the reset button that changes all the divs to white. 
function colorDiv(){
    if(click){
    
        if(color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } 
        else{
            this.style.backgroundColor = 'black';
        }
    }
}
 
function setColor(colorChoice){
    color = colorChoice;

}

function resetContent(){
    let divs = document.querySelectorAll('div');
    divs.forEach((div)=>div.style.backgroundColor = 'white');
}

