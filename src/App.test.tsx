import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('学习threejs', () => {
  render(<App />);
  const linkElement = screen.getByText(/学习threejs/i);
  expect(linkElement).toBeInTheDocument();
});
