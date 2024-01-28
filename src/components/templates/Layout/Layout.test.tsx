import { renderWithRouter } from 'test/render';

import Layout from './Layout';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(() => navigate),
}));

describe('components/templates/Layout', () => {
  it('should show layout for product pages', async () => {
    const { getByRole, user } = renderWithRouter({
      routes: [{ path: '/products', element: <Layout /> }],
      route: '/products',
    });

    const button = getByRole('button', { name: /início/i });

    await user.click(button);
    expect(navigate).toHaveBeenCalledWith('/');
  });

  it('should show layout for non-product pages', async () => {
    const { queryByRole } = renderWithRouter({
      routes: [{ path: '/', element: <Layout /> }],
      route: '/',
    });

    const button = queryByRole('button', { name: /início/i });
    expect(button).not.toBeInTheDocument();
  });
});
