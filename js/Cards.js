class Cards{
  constructor() {
      this.sectionDicas = document.getElementById('section-dicas')
      this.cardEsq = document.querySelector('.card-esquerdo')
      this.cardDir = document.querySelector('.card-direito')
  }

  scrollCards(){
    window.requestAnimationFrame(this.calculoScroll.bind(this));
  }

  calculoScroll(){
    const posicao = this.sectionDicas.getBoundingClientRect()['y']
    console.log(posicao)
    if(posicao >= 40){
      this.cardEsq.style.transform = `translate(${(-posicao+40)/10}%)`;
      this.cardDir.style.transform = `translate(${(posicao+40)/10}%)`;
    } 
  }

}

export { Cards }
