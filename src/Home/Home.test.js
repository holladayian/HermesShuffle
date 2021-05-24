import React from 'react';
import { Home } from './Home.js';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';


describe("Home", () => {
  it('should render the Home page', () => {
    render(
      <Router>
        <Home />
      </Router>
    )
    expect(screen.getByTestId("home")).toBeInTheDocument();
    expect(screen.getByTestId("h1")).toBeInTheDocument();
    expect(screen.getByTestId("p")).toBeInTheDocument();
  })
})