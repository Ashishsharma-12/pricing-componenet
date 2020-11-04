const priceSwitch = document.querySelector('.price-switch__checkbox');
const cards = document.getElementById('cards');

priceSwitch.addEventListener('click', function () {
  cards.classList.toggle('active');
})