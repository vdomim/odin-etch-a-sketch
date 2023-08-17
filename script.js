let squaresNumber = 16

const grid = document.querySelector('.container')
const btnSize = document.querySelector('.grid-size')
btnSize.addEventListener('click', changeSizeHandler)

function handleHover(event) {
    //event.target.classList.add('grid-item-hovered')
    if (event.target.classList.contains('grid-item-hovered')) {
        if (Number(event.target.style.opacity) < 1) {
            event.target.style.opacity =
                Number(event.target.style.opacity) + 1 / 10
        }
    } else {
        event.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
        event.target.style.opacity = '0.1'
        event.target.classList.add('grid-item-hovered')
    }

    function randomColor() {
        return Math.floor(Math.random() * 255)
    }
}

function changeSizeHandler() {
    do {
        squaresNumber = Number(prompt('How many squares per side do you want?'))
        if (squaresNumber > 100) alert('Max number of squares is 100')
    } while (squaresNumber > 100)
    displayGrid()
}

function displayGrid() {
    //grid.innerHTML = ''
    //grid.replaceChildren();
    removeAllChildNodes(grid)
    for (let i = 0; i < squaresNumber * squaresNumber; i++) {
        const div = document.createElement('div')
        const widthItem = 100 / squaresNumber
        div.classList.add(`grid-item`)
        div.style.width = `${widthItem}%`
        div.style.height = `${widthItem}%`
        div.addEventListener('mouseover', handleHover)
        grid.appendChild(div)
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

displayGrid()
