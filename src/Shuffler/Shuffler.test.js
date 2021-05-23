import React from 'react';
import { Shuffler } from './Shuffler.js';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';


describe("Shuffler", () => {
  it('should render the Shuffler page', () => {
    render(
      <Router>
        <Shuffler />
      </Router>
    )
    expect(screen.getByTestId("shuffler")).toBeInTheDocument();
    expect(screen.getByTestId("button-section")).toBeInTheDocument();
    expect(screen.getByTestId("wash")).toBeInTheDocument();
    expect(screen.getByTestId("overhand")).toBeInTheDocument();
    expect(screen.getByTestId("riffle")).toBeInTheDocument();
    expect(screen.getByTestId("organize")).toBeInTheDocument();
    expect(screen.getByTestId("shuffle-description")).toBeInTheDocument();
    expect(screen.getByTestId("shuffle")).toBeInTheDocument();
    expect(screen.getByTestId("card-list")).toBeInTheDocument();
  })
})