import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
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
          <Link to='/'>
            <button className="home-button">Home</button>
          </Link>
          <Link to='/shuffler'>
            <button className="shuffler-button">Shuffler</button>
          </Link>
          <Link to='/about'>
            <button className="about-button">About</button>
          </Link>
        </div>
      </section>
    );
}
