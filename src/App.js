import React, { Component } from 'react';
import { Header } from './Header/Header.js';
import { Shuffler } from './Shuffler/Shuffler.js';
import { Home } from './Home/Home.js';
import { Switch, Route } from 'react-router-dom';
import './App.css';

export class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
        <div className="App" id="main">
          <Header />
          <Switch>
            <Route exact path='/' render={() => <Home />}/>
            <Route exact path='/shuffler' render={() => <Shuffler />}/>
          </Switch>
        </div>
    );
  }
}
