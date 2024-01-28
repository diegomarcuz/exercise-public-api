import { renderWithRouter } from 'test/render';
import useSearch from 'services/useSearch';
import { query } from 'test/mocks/query';
import Products from './Products';

jest.mock('services/useSearch');
const mockedUseSearch = useSearch as jest.MockedFunction<typeof useSearch>;

const navigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(() => navigate),
}));

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

describe('pages/ProductDetail', () => {
  it('should render correctly', async () => {
    mockedUseSearch.mockReturnValue({
      ...query,
      data: mockData,
    });

    const { getAllByRole, queryByText, user } = renderWithRouter({
      routes: [{ path: '/products', element: <Products /> }],
      route: '/products?q=carro',
    });
    expect(mockedUseSearch).toHaveBeenCalledWith('carro');

    const buttons = getAllByRole('button', { name: /ver detalhes/i });
    expect(buttons).toHaveLength(3);

    buttons.forEach(async (button, index) => {
      await user.click(button);
      expect(navigate).toHaveBeenCalledWith(`/products/${mockData[index].id}`);
    });

    expect(
      queryByText('Para ver os produtos faça uma busca acima!!!'),
    ).not.toBeInTheDocument();
  });
});
