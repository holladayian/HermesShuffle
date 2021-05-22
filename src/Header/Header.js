import React from 'react';
import './Header.css';
import wing from '../assets/wing.png';

export const Header = () => {
    return (
      <div className="header">
        <img src={wing} alt="Wing" className="wing" />
        Hermes Shuffle
        <img src={wing} alt="Wing" className="wing wingRight" />
      </div>
    );
}
