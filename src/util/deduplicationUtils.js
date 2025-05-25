/**
 * Removes duplicate objects from an array based on the 'name' property
 * @param {Array} array - Array of objects to deduplicate
 * @returns {Array} - Array with unique objects
 */
export const deduplicateByName = (array) => {
  const seen = new Set();
  return array.filter((item) => {
    const name = item.name;
    if (seen.has(name)) {
      return false;
    }
    seen.add(name);
    return true;
  });
};

/**
 * Removes duplicate objects from an array using Set (basic deduplication)
 * @param {Array} array - Array to deduplicate
 * @returns {Array} - Array with unique values
 */
export const deduplicateBasic = (array) => {
  return [...new Set(array)];
};

/**
 * Removes duplicate objects from an array based on a custom property
 * @param {Array} array - Array of objects to deduplicate
 * @param {string} property - Property name to use for deduplication
 * @returns {Array} - Array with unique objects
 */
export const deduplicateByProperty = (array, property) => {
  const seen = new Set();
  return array.filter((item) => {
    const value = item[property];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
};

/**
 * Generic deduplication function that handles different strategies
 * @param {Array} array - Array to deduplicate
 * @param {string} strategy - Deduplication strategy ('name', 'basic', or property name)
 * @returns {Array} - Deduplicated array
 */
export const deduplicate = (array, strategy = 'name') => {
  switch (strategy) {
    case 'name':
      return deduplicateByName(array);
    case 'basic':
      return deduplicateBasic(array);
    default:
      return deduplicateByProperty(array, strategy);
  }
};
