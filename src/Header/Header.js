import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import wing from '../assets/wing.png';

export const Header = () => {
    return (
      <section className="header" data-testid="header">
        <div className="header-top" data-testid="headerTop">
          <img src={wing} alt="Wing" className="wing" data-testid="wingLeft"/>
          Hermes Shuffle
          <img src={wing} alt="Wing" className="wing wingRight" data-testid="wingRight"/>
        </div>
        <div className="header-bottom" data-testid="headerBottom">
          <Link to='/'>
            <button className="home-button" data-testid="homeButton">Home</button>
          </Link>
          <Link to='/shuffler'>
            <button className="shuffler-button" data-testid="shuffleButton">Shuffler</button>
          </Link>
          <Link to='/about'>
            <button className="about-button" data-testid="aboutButton">About</button>
          </Link>
        </div>
      </section>
    );
}
