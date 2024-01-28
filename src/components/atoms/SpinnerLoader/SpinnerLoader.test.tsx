import { render } from 'test/render';

import SpinnerLoader from './SpinnerLoader';

test('components/atoms/Loading', () => {
  const result = render(<SpinnerLoader aria-label="Spinner.." />);
  expect(result.getByLabelText('Spinner..')).toBeInTheDocument();
});
