import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  //we are looking for if Welcome home i present in th HTML
  const linkElement = getByText(/Welcome home/i);
  expect(linkElement).toBeInTheDocument();
});
