import { productFromApi, productCamelCase } from 'test/mocks/product';
import { convertToCamelCaseProperties } from './converter';

describe('utils/converter', () => {
  it('should convert object keys to camel case', () => {
    expect(convertToCamelCaseProperties(productFromApi)).toEqual(
      productCamelCase,
    );
  });
});
