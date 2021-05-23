import React from 'react';
import { Header } from './Header.js';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';


describe("Header", () => {
  it('should render the header bar', () => {
    render(
      <Router>
        <Header />
      </Router>
    )
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("headerTop")).toBeInTheDocument();
    expect(screen.getByTestId("wingLeft")).toBeInTheDocument();
    expect(screen.getByTestId("wingRight")).toBeInTheDocument();
    expect(screen.getByTestId("headerBottom")).toBeInTheDocument();
    expect(screen.getByTestId("homeButton")).toBeInTheDocument();
    expect(screen.getByTestId("shuffleButton")).toBeInTheDocument();
    expect(screen.getByTestId("aboutButton")).toBeInTheDocument();
  })
})