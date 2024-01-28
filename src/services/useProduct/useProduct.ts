import { useQuery } from 'react-query';
import { convertToCamelCaseProperties } from 'utils/converter';
import useApi from 'services/useApi';

interface ProductResponse {
  id: string;
  name: string;
  pictures: {
    id: string;
    url: string;
    maxWidth: number;
    maxHeight: number;
  }[];
  shortDescription: {
    type: string;
    content: string;
  };
}

const useProduct = (productId?: string) => {
  const requestFn = useApi(`products/${productId}`);

  const fetch = async () => {
    const data = await requestFn();
    return convertToCamelCaseProperties<ProductResponse>(data);
  };

  return useQuery({
    queryFn: fetch,
    enabled: !!productId,
    queryKey: productId ? ['product', productId] : undefined,
  });
};

export default useProduct;
