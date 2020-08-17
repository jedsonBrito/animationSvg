class Cards{

  constructor() {

  }

  calculoScroll(){
    const posicao = document.getElementById('section-dicas').getBoundingClientRect()['y']
    console.log(posicao)
    if(posicao <= 300){
      document.querySelector('.card-esquerdo').style.transform = `translate(${posicao}%)`;
      document.querySelector('.card-direito').style.transform = `translate(${posicao}%)`;
    } 
  }

}

export { Cards }
