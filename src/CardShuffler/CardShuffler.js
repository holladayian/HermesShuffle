export const CardShuffler = {

  wash(deck) {
      let i = deck.length,
        j = 0,
        temp;
      while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
      }
      return deck;
  },

  organize(deck) {
    return deck.sort((a, b) => {
      return a.index - b.index
    })
  },

  fisherYates(deck) {
    let count = deck.length;
    while (count) {
      deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
      count -= 1;
    }
    return deck
  },


  // In progress

  // overhand(deck) {
  //   let count = deck.length;
  //   // let newOrder = [];
  //   // for (let i = (count -= 10); i > 10; i -= 10) {
  //   // for (let i = 0; i < 5; i += 1) {
  //   for (let i = 0; i < (count -= count%10); i += 10) {
  //     console.log(deck)
  //     // deck.push(deck.splice(0, i))
  //     let splicedSection = deck.splice(41, 10)
  //     deck.unshift(splicedSection)
  //   }
  //   // deck.push(newOrder)
  //   console.log(deck.flat())
  //   return deck.flat()
  // }
}