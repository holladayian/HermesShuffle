import React, { Component } from 'react';
import './Shuffler.css';

export class Shuffler extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="shuffler">
        <div className="button-section">
        </div>
        <div className="shuffle-description">

        </div>
        <div className="card-list">

        </div>
      </div>
    );
  }
}