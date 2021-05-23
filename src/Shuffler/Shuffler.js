import React, { Component } from 'react';
import { ImageLoader } from '../ImageLoader/ImageLoader.js';
import './Shuffler.css';

export class Shuffler extends Component {
  constructor() {
    super()
    this.state = {
      cardList: ImageLoader,
      shuffleFunction: () => null,
      description: "",
      cardOrder: [],
    }
  }

  render() {
    return (
      <div className="shuffler">
        <div className="button-section">
          <button className="wash s-button">Wash</button>
          <button className="overhand s-button">Overhand</button>
          <button className="riffle s-button">Riffle</button>
          <button className="organize s-button">Organize</button>
        </div>
        <div className="shuffle-description">

        </div>
        <button className="shuffle s-button">Shuffle</button>
        <div className="card-list">
          {this.state.cardList.map(card => <img src={card} alt={card}/>)}
        </div>
      </div>
    );
  }
}

