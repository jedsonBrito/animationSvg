import { Cards } from './Cards.js'


window.onload = () => {
  const animaCards = new Cards();
  document.addEventListener('scroll', animaCards.scrollCardss.bind(animaCards))
}
