const myCarouselElement = document.querySelector('#customer-slide')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 5000,
  pause: 'hover'
})