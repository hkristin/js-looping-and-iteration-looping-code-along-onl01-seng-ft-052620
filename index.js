
function writeCards(namesArray, event) {
  let thankYouCards = []
  for(let i = 0; i < names.length; i++) {
    thankYouCards.push('Thank you, ${namesArray[i]}, for the wonderful ${event} gift!');
  }
  return thankYouCards
}
