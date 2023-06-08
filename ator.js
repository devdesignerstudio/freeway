//carrega propriedades e métodos do ator
let xAtor = 60
let yAtor = 368
let comprimentoAtor = 28
let alturaAtor = 28
let colisao = false
let meusPontos = 0

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, comprimentoAtor, alturaAtor)
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 2
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 2
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xAtor,
      yAtor,
      comprimentoAtor / 2
    )
    if (colisao) {
      if (meusPontos > 0) meusPontos -= 1
      voltaAtorPosicaoInicial()
    }
  }
}

function voltaAtorPosicaoInicial() {
  yAtor = 368
}

function incluiPontos() {
  fill(255, 240, 60)
  textAlign(CENTER)
  textSize(25)
  text(meusPontos, width / 5, 27)
}

function marcaPonto() {
  if (yAtor < 14) {
    meusPontos += 1
    voltaAtorPosicaoInicial()
  }
}
