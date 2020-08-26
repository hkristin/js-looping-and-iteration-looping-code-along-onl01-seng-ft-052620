
function writeCards(names, event) {
  let thankYouCards = []
  for(let i = 0; i < names.length; i++) {
    thankYouCards.log('Thank you, ${names[i]}, for the wonderful ${event} gift!');
  }
  return thankYouCards
}
