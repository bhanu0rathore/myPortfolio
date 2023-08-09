import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  const headerTextRegex = /I'm a\s+Frontend\s+Developer\./;
  const headerText = screen.getByText(headerTextRegex);
  expect(headerText).toBeInTheDocument();
});

