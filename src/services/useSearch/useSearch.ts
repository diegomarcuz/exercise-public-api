import { useQuery } from 'react-query';
import useApi from 'services/useApi';
import { convertToCamelCaseProperties } from 'utils/converter';

export interface SearchResponse {
  id: string;
  name: string;
  pictures: {
    id: string;
    url: string;
  }[];
}

type ApiResponse = {
  results: Array<Record<string, unknown>>;
};

const useSearch = (query: string | null) => {
  const requestFn = useApi(
    `products/search?status=active&site_id=MLB&q=${query}`,
  );

  const fetch = async () => {
    const data: ApiResponse = await requestFn();
    return data.results.map(item =>
      convertToCamelCaseProperties<SearchResponse>(item),
    );
  };

  return useQuery({
    queryFn: fetch,
    enabled: !!query,
    queryKey: query ? ['search', query] : undefined,
  });
};

export default useSearch;
