var numeroEstrelas =800
const main = document.querySelector('.main')
const white = 'white'
const yellow = 'yellow'


for (let i = 0; i < numeroEstrelas; i++) {
  //como eu faco para que as estrelas ocupem 100% da tela?

  //
  const estrela = document.createElement('span')
  estrela.style.right = Math.random() * window.innerWidth + 'px'
  estrela.style.top = Math.random() * document.documentElement.scrollHeight + 'px'

  estrela.style.backgroundColor = (Math.random() > 0.2) ? white : yellow
  estrela.className = 'stars'
  main.appendChild(estrela)
}