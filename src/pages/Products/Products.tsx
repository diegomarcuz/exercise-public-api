import { useNavigate, useSearchParams } from 'react-router-dom';
import useSearch from 'services/useSearch';
import Product from 'components/atoms/Product';
import SpinnerLoader from 'components/atoms/SpinnerLoader';
import * as S from './Product.style';

const Products = () => {
  const [searchParams] = useSearchParams();
  const { data, status } = useSearch(searchParams.get('q'));
  const navigate = useNavigate();

  if (status === 'loading') {
    return (
      <S.Container>
        <SpinnerLoader />
      </S.Container>
    );
  }

  return (
    <S.Container>
      {!data?.length ? (
        <h3>Para ver os produtos faça uma busca acima!!!</h3>
      ) : (
        <>
          {data.map(product => {
            return (
              <Product
                key={product.id}
                pictures={product.pictures}
                title={product.name}
                buttonProps={{
                  onClick: () => navigate(`/products/${product.id}`),
                  children: 'Ver detalhes',
                }}
              />
            );
          })}
        </>
      )}
    </S.Container>
  );
};

export default Products;
