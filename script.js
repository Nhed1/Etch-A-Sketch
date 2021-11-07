let container = document.querySelector('.container');
let clear = document.querySelector('.clear')
let sizeRange = document.querySelector('.size')
let i = 0

sizeRange.addEventListener('click', function () {
    let valueRange = this.value
    // console.log(valueRange)
    createGrid(valueRange)
})

function createGrid(value) {
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


// change color of the divs ---------
function getTheDiv(div) {
    div.addEventListener('mouseover', changeColor)
}

function changeColor() {
    let attribute = this
    attribute.style.backgroundColor = 'blue'
}
// ----------------------------------------


// function clearGrid(container) {
//     while (container.firstChild) {
//         container.removeChild(container.firstChild) // remove all childs
//     }
// }




