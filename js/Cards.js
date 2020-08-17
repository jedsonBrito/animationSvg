class Cards{

  constructor() {

  }

  calculoScroll(){
    const posicao = document.getElementById('section-dicas').getBoundingClientRect()['y']
    console.log(posicao)
    if(posicao <= 280){
      document.querySelect('.card-esquerdo').backgroundColor = "blue";
      document.querySelect('.card-direto').backgroundColor = "red";
    } else {
      document.querySelect('.card-esquerdo').backgroundColor = "white";
      document.querySelect('.card-direto').backgroundColor = "white";
    }
  }

}

export { Cards }
