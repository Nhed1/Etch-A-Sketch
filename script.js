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

function paint() {
    // paint when mouse is over the elements
    console.log('hey')
}

allDivs.forEach(div => {
    div.addEventListener('mouseover', paint)
});
