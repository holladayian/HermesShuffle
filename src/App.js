import React, { Component } from 'react';
import { Header } from './Header/Header.js';
import { Shuffler } from './Shuffler/Shuffler.js';
import { Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route exact path='/' render={() => <div>Home</div>}/>
          <Route exact path='/shuffler' render={() => <Shuffler />}/>
          <Route exact path='/about' render={() => <div>About</div>}/>
        </Switch>
      </div>
    );
  }
}
