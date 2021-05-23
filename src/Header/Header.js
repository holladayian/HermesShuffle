import React from 'react';
import './Header.css';
import wing from '../assets/wing.png';

export const Header = () => {
    return (
      <section className="header">
        <div className="header-top">
          <img src={wing} alt="Wing" className="wing" />
          Hermes Shuffle
          <img src={wing} alt="Wing" className="wing wingRight" />
        </div>
        <div className="header-bottom">
          <button className="home-button">Home</button>
          <button className="shuffler-button">Shuffler</button>
          <button className="about-button">About</button>
        </div>
      </section>
    );
}
