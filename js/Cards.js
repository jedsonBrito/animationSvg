class Cards{

  constructor() {

  }

  calculoScroll(){
    const posicao = document.getElementById('section-dicas').getBoundingClientRect()['y']
    console.log(posicao)
    if(posicao <= 300){
      document.querySelector('.card-esquerdo').style.backgroundColor = "blue";
      document.querySelector('.card-direito').style.backgroundColor = "red";
    } else {
      document.querySelector('.card-esquerdo').style.backgroundColor = "white";
      document.querySelector('.card-direito').style.backgroundColor = "white";
    }
  }

}

export { Cards }
