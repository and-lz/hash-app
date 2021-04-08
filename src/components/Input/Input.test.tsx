import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

test('renders basic input with label', () => {
  render(<Input label="Basic Input" />);
  const label = screen.getByText(/Basic Input/i);
  expect(label).toBeInTheDocument();
});
