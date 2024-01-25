import { render, screen } from '@testing-library/react';

import Home from './Home';

test('renders Home', () => {
  render(<Home />);
  expect(screen.getByText(/hello world/i)).toBeTruthy();
});
