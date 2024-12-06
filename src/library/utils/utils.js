// Função para planificar objetos aninhados
// eslint-disable-next-line import/prefer-default-export
export const flattenObject = (obj, parentKey = '') =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof value === 'object' && value !== null) {
      Object.assign(acc, flattenObject(value, newKey));
    } else {
      acc[newKey] = value;
    }
    return acc;
  }, {});
