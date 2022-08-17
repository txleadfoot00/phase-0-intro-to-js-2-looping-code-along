
function writeCards(people, occasion) {
    let cardGreetingArray = [], i, cardGreeting
      for (let i = 0; i < people.length; i++) {
      let cardGreeting = (`Thank you, ${people[i]}, for the wonderful ${occasion} gift!`)
        cardGreetingArray.push(cardGreeting);
      }
    return cardGreetingArray;
    }
    
    function countDown(number){
    while (number >= 0) {
        console.log (number--);
    }}
    