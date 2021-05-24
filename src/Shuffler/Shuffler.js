import React, { Component } from 'react';
import { ImageLoader } from '../ImageLoader/ImageLoader.js';
import { CardShuffler } from '../CardShuffler/CardShuffler.js';
import './Shuffler.css';

export class Shuffler extends Component {
  constructor() {
    super()
    this.state = {
      cardList: ImageLoader.map((image, i) => {return {img: image, index: i}}),
    }
  }

  shuffle = (newOrder) => {
    this.setState({ cardList: newOrder })
  }

  render() {
    return (
      <div className="shuffler" data-testid="shuffler">
        <div className="button-section" data-testid="button-section">
          <button className="wash s-button" onClick={() => this.shuffle(CardShuffler.wash(this.state.cardList))} data-testid="wash">Shuffle</button>
          <button className="organize s-button" data-testid="organize" onClick={() => this.shuffle(CardShuffler.organize(this.state.cardList))}>Organize</button>
        </div>
        <div className="card-list" data-testid="card-list">
          {this.state.cardList.map(card => <img src={card.img} alt={card.img} className="card" key={card.index}/>)}
        </div>
      </div>
    );
  }
}

