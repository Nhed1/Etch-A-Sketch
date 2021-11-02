let container = document.querySelector('.container');
let i = 0
const allDivs = []

let sizeRange = document.querySelector('.size')
// console.log(sizeRange)
sizeRange.addEventListener('input', (e) => {
    console.log(e)
})
while (i <= 256) {
    let div = document.createElement('div')
    div.classList.add('divsGrid')
    container.appendChild(div)
    allDivs.push(div)
    i++
}

function getElement() {
    let attribute = this
    attribute.style.backgroundColor = 'blue'
    // console.log(attribute)
}

allDivs.forEach(div => {
    div.addEventListener('mouseover', getElement)

});
