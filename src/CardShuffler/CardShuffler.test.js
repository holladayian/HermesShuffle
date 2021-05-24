import { CardShuffler } from './CardShuffler.js';
import { ImageLoader } from '../ImageLoader/ImageLoader.js';
import '@testing-library/jest-dom';

describe("CardShuffler", () => {
  let cardList;
  beforeEach(() => {
    cardList = ImageLoader.map((image, i) => {return {img: image, index: i}});
  })

  it('should shuffle the cards', () => {
    
    CardShuffler.wash(cardList);
    console.log(cardList[0].img);

    expect(cardList[0].img).not.toStrictEqual({"img": "AS.png", "index": 0});
  })

  it('should reorganize the cards after they have been shuffled', () => {
    
    let shuffled = CardShuffler.wash(cardList);
    let organized = CardShuffler.organize(shuffled);

    expect(organized[0]).toStrictEqual({"img": "AS.png", "index": 0});
  })
})