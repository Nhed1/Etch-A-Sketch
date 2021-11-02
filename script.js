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


allDivs.forEach(div => {
    div.addEventListener('mouseover', (div) => {
        console.log(div)
    })
});
