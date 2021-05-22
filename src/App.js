import React, { Component } from 'react';
import { Header } from './Header/Header.js';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <Header />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Test
          </a>
        </header> */}
      </div>
    );
  }
}
