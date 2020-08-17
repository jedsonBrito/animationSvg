class Cards{

  constructor() {

  }

  calculoScroll(){
    const posicao = document.getElementById('section-dicas').getBoundingClientRect()['y']
    console.log(posicao)
    if(posicao <= 280){
      document.querySelector('.card-esquerdo').backgroundColor = "blue";
      document.querySelector('.card-direto').backgroundColor = "red";
    } else {
      document.querySelector('.card-esquerdo').backgroundColor = "white";
      document.querySelector('.card-direto').backgroundColor = "white";
    }
  }

}

export { Cards }
