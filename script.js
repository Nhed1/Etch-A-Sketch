let container = document.querySelector('.container');
let i = 0
const allDivs = []

let sizeRange = document.querySelector('.size')

function createGrid(value) {
    let gridSize = value ** 2
    console.log(gridSize)
    console.log(value)
    while (i < gridSize) {

        let div = document.createElement('div')
        div.classList.add('divsGrid')
        container.appendChild(div)
        container.setAttribute('style', `grid-template-columns: repeat(${value},1fr); grid-template-rows: repeat(${value},1fr);`)
        allDivs.push(div)
        i++
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
