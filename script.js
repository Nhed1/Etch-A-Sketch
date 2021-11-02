let container = document.querySelector('.container');
let i = 0
const allDivs = []

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
