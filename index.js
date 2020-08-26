
const names = ["Ada", "Brendan", "Ali"];
let event = ["birthday"]

function writeCards(names, event) {
  let thankYouCards = []
  for(let i = 0; i < names.length; i++) {
    console.log('Thank you, ${names[i]}, for the wonderful ${event} gift!');
  }
  return thankYouCards
}
