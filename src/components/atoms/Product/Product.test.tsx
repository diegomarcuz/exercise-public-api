import { render } from 'test/render';
import Product, { ProductProps } from './Product';

test('components/atoms/Product', () => {
  const product = {
    title: 'Product 1',
    pictures: [
      {
        url: 'https://via.placeholder.com/150',
        id: '1',
      },
    ],
  } as ProductProps;
  // eslint-disable-next-line react/jsx-props-no-spreading
  const { getByLabelText, getByRole } = render(<Product {...product} />);

  const image = getByRole('img');
  expect(image).toHaveProperty('src', 'https://via.placeholder.com/150');
  expect(image.parentElement?.children.length).toBe(1);
  expect(getByLabelText('Product 1')).toBeInTheDocument();
});
