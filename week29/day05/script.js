const container = document.getElementById('container');
const colors = ["red", "green", "yellow", "orange", "purple", "cyan", "blue", "pink", "grey"]

// declaring square numbers
const squareNr = 500;

// creating  the squares and adding the 'square' classlist to it
for (let i = 0; i < squareNr; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // these 2 eventlisteners helps us to achieve our hoverboard effect!
    square.addEventListener('mouseover', () => {
        setColorToEle(square)
    })

    square.addEventListener('mouseout', () => {
        removeColorFromEle(square)
    })

    // appending the square to the container
    container.appendChild(square)
}


// function for adding the colors to our square boxes !
function setColorToEle(element) {
    const color = randomColor();
    // changing the background color and adding the boxshadow to our element !
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color} , 0 0 10px ${color}`
}

// function for removing the colors from our square boxes !
function removeColorFromEle(element) {
    // changing the styles to the default  !
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`;
}

// Generation the random color for our hoverboard !
function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
