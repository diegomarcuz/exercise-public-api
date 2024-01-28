import { renderWithRouter } from 'test/render';
import useProduct from 'services/useProduct';
import { query } from 'test/mocks/query';
import ProductDetail from './ProductDetail';

jest.mock('services/useProduct');
const mockedUseProduct = useProduct as jest.MockedFunction<typeof useProduct>;

const mockData = {
  id: '1234',
  name: 'Testing product name',
  pictures: [
    {
      maxWidth: 100,
      maxHeight: 100,
      id: '805105-MLU73418060303_122023',
      url: 'https://http2.mlstatic.com/D_NQ_NP_805105-MLU73418060303_122023-F.jpg',
    },
  ],
  shortDescription: {
    content: 'Testing product description',
    type: 'plain_text',
  },
};

describe('pages/ProductDetail', () => {
  it('should render correctly', () => {
    mockedUseProduct.mockReturnValue({
      ...query,
      data: mockData,
    });

    const { getByText, queryByText } = renderWithRouter({
      routes: [{ path: '/products/:productId', element: <ProductDetail /> }],
      route: '/products/1234',
    });

    expect(getByText('Testing product name')).toBeInTheDocument();
    expect(getByText('Testing product description')).toBeInTheDocument();
    expect(
      queryByText('Não foi possível encontrar o produto desejado!'),
    ).not.toBeInTheDocument();
    expect(mockedUseProduct).toHaveBeenCalledWith('1234');
  });
});
