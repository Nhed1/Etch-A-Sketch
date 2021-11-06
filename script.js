let container = document.querySelector('.container');
let i = 0
const allDivs = []
let clear = document.querySelector('.clear')
let sizeRange = document.querySelector('.size')

function createGrid(value) {
    let gridSize = value ** 2
    // clearGrid(container)
    let style = 'style',
        gridStyle = `grid-template-columns: repeat(${value},1fr); grid-template-rows: repeat(${value},1fr);`

    console.log(value)
    while (i < gridSize) {
        let div = document.createElement('div')
        div.classList.add('divsGrid')
        container.appendChild(div)
        container.setAttribute(style, gridStyle)
        allDivs.push(div)
        i++
    }
}

function clearGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild) // remove all childs
    }
}

sizeRange.addEventListener('click', function () {
    let valueRange = this.value
    // console.log(valueRange)
    createGrid(valueRange)
})


function getElement() {
    let attribute = this
    attribute.style.backgroundColor = 'blue'
    // console.log(attribute)
}

allDivs.forEach(div => {
    div.addEventListener('mouseover', getElement)

});
