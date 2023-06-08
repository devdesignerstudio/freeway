//carrega propriedades e métodos do ator
let xAtor = 100
let yAtor = 368
let comprimentoAtor = 28
let alturaAtor = 28

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
