import React, { Component } from 'react';
import { ImageLoader } from '../ImageLoader/ImageLoader.js';
import { CardShuffler } from '../CardShuffler/CardShuffler.js';
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

  shuffle = (newOrder) => {
    this.setState({ cardList: newOrder })
  }

  render() {
    return (
      <div className="shuffler" data-testid="shuffler">
        <div className="button-section" data-testid="button-section">
          <button className="wash s-button" onClick={() => this.shuffle(CardShuffler.wash(this.state.cardList))} data-testid="wash">Wash</button>
          <button className="overhand s-button" data-testid="overhand">Overhand</button>
          <button className="riffle s-button" data-testid="riffle">Riffle</button>
          <button className="organize s-button" data-testid="organize">Organize</button>
        </div>
        {this.state.shuffleFunction() && 
          <>
            <div className="shuffle-description" data-testid="shuffle-description">
              {this.state.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </div>
            <button className="shuffle s-button" data-testid="shuffle" onClick={() => this.shuffle()}>Shuffle</button>
          </>
        }
        <div className="card-list" data-testid="card-list">
          {this.state.cardList.map((card, i) => <img src={card} alt={card} className="card" key={i}/>)}
        </div>
      </div>
    );
  }
}

