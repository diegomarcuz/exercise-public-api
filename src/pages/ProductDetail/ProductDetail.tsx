import { useParams } from 'react-router-dom';
import useProduct from 'services/useProduct';
import Product from 'components/atoms/Product';
import SpinnerLoader from 'components/atoms/SpinnerLoader';
import * as S from './ProductDetail.style';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();

  const { data: product, status } = useProduct(productId);

  if (status === 'loading') {
    return (
      <S.Container>
        <SpinnerLoader />
      </S.Container>
    );
  }

  return (
    <S.Container>
      {!product ? (
        <h3>Não foi possível encontrar o produto desejado!</h3>
      ) : (
        <Product
          key={product.id}
          pictures={product.pictures}
          title={product.name}
          description={product.shortDescription.content}
        />
      )}
    </S.Container>
  );
};

export default ProductDetail;
