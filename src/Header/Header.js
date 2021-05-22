import React from 'react';
import wing from '../assets/wing.png';

export const Header = () => {
    return (
      <div className="Header">
        <img src={wing} alt="Wing" className="wing" />
        Header
        <img src={wing} alt="Wing" className="wing wingRight" />
      </div>
    );
}
