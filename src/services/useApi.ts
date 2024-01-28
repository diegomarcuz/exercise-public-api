import env from 'config/constants';

type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

type RequestOptions = {
  method: Method;
  headers?: any;
};

const createAuthenticatedRequest = (
  path: string,
  requestOptions?: RequestOptions,
) => {
  const url = new URL(`${env.API_URL}/${path}`);
  const { method = 'GET', headers } = requestOptions ?? {};

  return async () => {
    const request = {
      method,
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${env.AUTH_TOKEN}`,
        ...headers,
      },
    };
    const response = await fetch(url, request);

    if (!response.ok) {
      const error = await response.json();
      throw error;
    }

    return response.json();
  };
};

export const useApi = (path: string, requestOptions?: RequestOptions) => {
  const authenticatedRequest = createAuthenticatedRequest(path, requestOptions);

  return authenticatedRequest;
};

export default useApi;
