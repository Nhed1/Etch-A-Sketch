let container = document.querySelector('.container');
let clear = document.querySelector('.clear')
let sizeRange = document.querySelector('.size')

sizeRange.addEventListener('click', function () {
    let valueRange = this.value
    // console.log(valueRange)
    createGrid(valueRange)
})

function createGrid(value) {
    let i = 0
    clearGrid(container)
    let gridSize = value ** 2
    // clearGrid(container)
    let style = 'style',
        gridStyle = `grid-template-columns: repeat(${value},1fr); grid-template-rows: repeat(${value},1fr);`

    console.log(value)
    while (i < gridSize) {
        let div = document.createElement('div')
        getTheDiv(div)

        div.classList.add('divsGrid')
        container.appendChild(div)
        container.setAttribute(style, gridStyle)
        i++
    }
}

// clear the div
clear.addEventListener('click', clearGrid)

// change color of the divs ---------
function getTheDiv(div) {
    div.addEventListener('mouseover', changeColor)
}

function changeColor() {
    let attribute = this
    attribute.style.backgroundColor = 'blue'
}
// ----------------------------------------

// remove all divs from container
function clearGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild) // remove all childs
    }
}
// ----------------------------------------



