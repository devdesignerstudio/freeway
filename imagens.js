//carrega imagens  do jogo
let imagemEstrada
let imagemAtor
let imagemCarro1
let imagemCarro2
let imagemCarro3

//carreag sons do jogo
let somColisao
let somPontos
let somTrilha

function preload() {
  //carrega imagens  do jogo
  imagemEstrada = loadImage("img/estrada.png")
  imagemAtor = loadImage("img/ator-1.png")
  imagemCarro1 = loadImage("img/carro-1.png")
  imagemCarro2 = loadImage("img/carro-2.png")
  imagemCarro3 = loadImage("img/carro-3.png")
  imagemCarros = [
    imagemCarro1,
    imagemCarro2,
    imagemCarro3,
    imagemCarro1,
    imagemCarro2,
    imagemCarro3,
  ]
  //carreag sons do jogo
  somColisao = loadSound("sons/colidiu.mp3")
  somPontos = loadSound("sons/pontos.wav")
  somTrilha = loadSound("sons/trilha.mp3")
}
