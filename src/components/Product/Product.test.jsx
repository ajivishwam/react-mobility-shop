import React from 'react';
import { render } from '@testing-library/react';

import Product from './Product.jsx.js';

const exampleProducts = [
  {
    "name": "ship",
    "sponsor": "ship",
    "cost_in_credits": "90000"
  },
  {
    "name": "abc",
    "sponsor": "abc",
    "cost_in_credits": "50000"
  }
];

test('renders', () => {
  const { getByTestId } = render(<Product product={exampleArticles} />);
  expect(getByTestId('articles'));
});
