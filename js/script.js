import { Cards } from './Cards.js'


window.onload = () => {
  let animaCard = new Cards()
  document.addEventListener('scroll',animaCard.test)
}
