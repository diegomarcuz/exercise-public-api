import { renderWithRouter } from 'test/render';
import { query } from 'test/mocks/query';
import useSearch from 'services/useSearch';
import { waitFor } from '@testing-library/react';
import Search from './Search';

const mockData = [
  {
    id: 'MLB28869141',
    name: 'DIEGO 2 x Substituição de carros de pista Scalextric A Pila Racing Pro',
    pictures: [
      {
        id: '805105-MLU73418060303_122023',
        url: 'https://http2.mlstatic.com/D_NQ_NP_805105-MLU73418060303_122023-F.jpg',
      },
    ],
  },
  {
    id: 'MLB27708795',
    name: 'Mini Carro De Madeira Da Lume Cód Lm 61',
    pictures: [
      {
        id: '719680-MLU72226047273_102023',
        url: 'https://http2.mlstatic.com/D_NQ_NP_719680-MLU72226047273_102023-F.jpg',
      },
    ],
  },
  {
    id: 'MLB27708756',
    name: 'Mini Carro De Plastico Da Biotech Cód  1001',
    pictures: [
      {
        id: '719680-MLU72226047273_102023',
        url: 'https://http2.mlstatic.com/D_NQ_NP_719680-MLU72226047273_102023-F.jpg',
      },
    ],
  },
];

const setSearchParams = jest.fn();
const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: jest.fn(() => [
    {
      get: jest.fn(),
      set: setSearchParams,
      delete: jest.fn(),
    },
    jest.fn(),
  ]),
  useNavigate: jest.fn(() => navigate),
}));

jest.mock('services/useSearch');
const mockedUseSearch = useSearch as jest.MockedFunction<typeof useSearch>;

describe('components/organisms/Search', () => {
  it('should navigate correctly', async () => {
    mockedUseSearch.mockReturnValue({
      ...query,
      data: mockData,
    });
    const { getByText, getAllByRole, user } = renderWithRouter({
      routes: [{ path: '/', element: <Search /> }],
    });
    const input = getAllByRole('combobox');

    await user.type(input[0], 'c');
    expect(setSearchParams).toHaveBeenCalledWith('q', 'c');

    const option = getByText(/Mini Carro De Plastico Da Biotech Cód 1001/i);
    await user.click(option);
    await waitFor(async () => {
      expect(navigate).toHaveBeenCalledWith('/products/MLB27708756');
    });
  });
});
