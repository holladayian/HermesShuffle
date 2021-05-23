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
  }
}