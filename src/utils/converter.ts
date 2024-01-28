import { camelCase } from 'lodash';

export const convertToCamelCaseProperties = <T>(
  object: Record<string, unknown>,
): T => {
  return Object.entries(object).reduce<T>((objectAccumulator, [key, value]) => {
    if (!value) {
      return { ...objectAccumulator, [camelCase(key)]: value };
    }

    if (Array.isArray(value)) {
      const parsedArray = value.map(item => {
        if (typeof item !== 'object') return item;
        return convertToCamelCaseProperties<T>(item);
      });

      return {
        ...objectAccumulator,
        [camelCase(key)]: parsedArray,
      };
    }

    if (typeof value === 'object') {
      return {
        ...objectAccumulator,
        [camelCase(key)]: convertToCamelCaseProperties<T>(
          value as Record<string, unknown>,
        ),
      };
    }

    return { ...objectAccumulator, [camelCase(key)]: value };
  }, {} as T);
};
