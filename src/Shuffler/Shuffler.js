import React, { Component } from 'react';
import './Shuffler.css';

export class Shuffler extends Component {
  constructor() {
    super()
    this.state = {
      cardList: [
        "AS", "AH", "AD", "AC", 
        "KS", "KH", "KD", "KC", 
        "QS", "QH", "QD", "QC", 
        "JS", "JH", "JD", "JC", 
        "10S", "10H", "10D", "10C", 
        "9S", "9H", "9D", "9C", 
        "8S", "8H", "8D", "8C", 
        "7S", "7H", "7D", "7C", 
        "6S", "6H", "6D", "6C", 
        "5S", "5H", "5D", "5C", 
        "4S", "4H", "4D", "4C", 
        "3S", "3H", "3D", "3C", 
        "2S", "2H", "2D", "2C", 
      ],
      shuffleFunction: () => null,
      description: "",
      cardOrder: [],
    }
  }
  render() {
    return (
      <div className="shuffler">
        <div className="button-section">
          <button className="wash-button">Wash</button>
          <button className="overhand-button">Overhand</button>
          <button className="riffle-button">Riffle</button>
          <button className="organize-button">Organize</button>
        </div>
        <div className="shuffle-description">

        </div>
        <button className="shuffle-button">Shuffle</button>
        <div className="card-list">

        </div>
      </div>
    );
  }
}