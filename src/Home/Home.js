import React from 'react';
import './Home.css';

export const Home = () => {
    return (
      <section className="home" data-testid="home">
        <h1 data-testid="h1">Welcome to Hermes Shuffle!</h1>
        <p data-testid="p">
          This was a take home Engineering Challenge from Altvia.
          <br/>
          The goal? Design and implement a card shuffler using the language of your choice.
          <br/>
          <br/>
          Check out it's functionality in the Shuffler page.
          <br/>
          Or check out the repository <a href="https://github.com/holladayian/HermesShuffle" target="_blank">here!</a>
        </p>
        
      </section>
    );
}