var numeroEstrelas =400
const main = document.querySelector('.main')
const white = 'white'
const yellow = 'yellow'


for (let i = 0; i < numeroEstrelas; i++) {
  const estrela = document.createElement('div')
  estrela.style.left = Math.random() * window.innerWidth + 'px'
  estrela.style.top = Math.random() * window.innerHeight + 'px'
  estrela.style.backgroundColor = (Math.random() > 0.2) ? white : yellow
  estrela.className = 'stars'
  main.appendChild(estrela)
}