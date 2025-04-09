function flattenProperties(obj, propertiesMap) {
  const newObj = { ...obj };

  Object.entries(propertiesMap).forEach(([prop, config]) => {
    if (newObj[prop] && typeof newObj[prop] === 'object' && config.key in newObj[prop]) {
      let value = newObj[prop][config.key];

      // Converte para número se for especificado no propertyMap
      if (config.type === 'number') {
        value = Number(value);
      }

      newObj[prop] = value;
    }
  });

  return newObj;
}

export default flattenProperties;
