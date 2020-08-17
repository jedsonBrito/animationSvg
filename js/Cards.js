class Cards{

  constructor() {

  }

  calculoScroll(){
    const posicao = document.getElementById('section-dicas').getBoundingClientRect()['y']
    console.log(posicao)
    if(posicao <= 280){
      document.querySelector('.card-esquerdo').style.backgroundColor = "blue";
      document.querySelector('.card-direto').style.backgroundColor = "red";
    } else {
      document.querySelector('.card-esquerdo').style.backgroundColor = "white";
      document.querySelector('.card-direto').style.backgroundColor = "white";
    }
  }

}

export { Cards }
