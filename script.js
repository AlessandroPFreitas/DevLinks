function toggleMode() {
const html = document.documentElement
html.classList.toggle("light")

// pegar tag img
const img = document.querySelector("#profile img")

// Substituir a imagem
if(html.classList.contains('light')){
  // Se tiver light mode, adicionar a imagem light
 img.setAttribute('src', './assets/light.png')
 img.setAttribute('alt', "Foto do Mayk Brito sorrindo, usando óculos e com jaqueta preta, sem barba e fundo azul")
 } else {
  img.setAttribute("src", "./assets/padrão.png")
img.setAttribute( "alt","Foto do Mayk Brito sorrindo, usando óculos e com camisa preta, barba e fundo amarelo"
)
}
}
