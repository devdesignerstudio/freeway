//carrega propriedades e métodos do carro

let xCarros = [600, 600, 600, 600, 600, 600] //[xCarro1, xCarro2, xCarro3, xCarro4, xCarro5, xCarro6]
let yCarros = [40, 96, 150, 210, 270, 318] //[yCarro1, yCarro2, yCarro3, yCarro4, yCarro5, yCarro6]
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3] //[velocidadeCarro1, velocidadeCarro2, velocidadeCarro3, velocidadeCarro4, velocidadeCarro5, velocidadeCarro6]

//carro1
// let xCarro1 = 600;
// let yCarro1 = 40;
// let velocidadeCarro1 = 2;

//carro2
// let xCarro2 = 600;
// let yCarro2 = 96;
// let velocidadeCarro2 = 2.5;

//carro3
// let xCarro3 = 600;
// let yCarro3 = 150;
// let velocidadeCarro3 = 3.2;

//propriedades comum a todos os carros
let comprimentoCarro = 50
let alturaCarro = 40

//métodos comum a todos os carros
function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(
      imagemCarros[i],
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro
    )
  }
}

function movimentaCarro() {
  for (let j = 0; j < xCarros.length; j++) {
    xCarros[j] -= velocidadeCarros[j]
  }

  //   xCarros[0] -= velocidadeCarros[0];
  //   xCarros[1] -= velocidadeCarros[1];
  //   xCarros[2] -= velocidadeCarros[2];
  voltaPosicaoInicialCarro()
}

function voltaPosicaoInicialCarro() {
  for (let k = 0; k < xCarros.length; k++) {
    if (passouTodaTela(k)) xCarros[k] = 600
  }

  // if (xCarros[0] < -50){
  //   xCarros[0] = 600;
  // }
  // if (xCarros[1] < -50){
  //   xCarros[1] = 600;
  // }
  // if (xCarros[2] < -50){
  //   xCarros[2] = 600;
  // }
}

function passouTodaTela(indice) {
  return xCarros[indice] < -50
}
