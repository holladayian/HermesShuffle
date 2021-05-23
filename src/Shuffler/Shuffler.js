import React, { Component } from 'react';
import { ImageLoader } from '../ImageLoader/ImageLoader.js';
import './Shuffler.css';

export class Shuffler extends Component {
  constructor() {
    super()
    this.state = {
      cardList: ImageLoader,
      shuffleFunction: () => "null",
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
        {this.state.shuffleFunction() && 
          <>
            <div className="shuffle-description">
              {this.state.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </div>
            <button className="shuffle s-button">Shuffle</button>
          </>
        }
        <div className="card-list">
          {this.state.cardList.map(card => <img src={card} alt={card} class="card"/>)}
        </div>
      </div>
    );
  }
}

