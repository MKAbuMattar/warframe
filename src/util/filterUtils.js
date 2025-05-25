/**
 * Creates a filter function that excludes items based on name patterns
 * @param {string[]} excludePatterns - Array of patterns to exclude (case-insensitive)
 * @returns {Function} - Filter function
 */
export const createExcludeFilter = (excludePatterns = []) => {
  return (item) => {
    const name = item.name?.toLowerCase() || '';
    return !excludePatterns.some((pattern) =>
      name.includes(pattern.toLowerCase()),
    );
  };
};

/**
 * Creates a filter function that includes items based on name patterns
 * @param {string[]} includePatterns - Array of patterns to include (case-insensitive)
 * @returns {Function} - Filter function
 */
export const createIncludeFilter = (includePatterns = []) => {
  return (item) => {
    const name = item.name?.toLowerCase() || '';
    return includePatterns.some((pattern) =>
      name.includes(pattern.toLowerCase()),
    );
  };
};

/**
 * Creates a filter function based on property comparisons
 * @param {string} property - Property name to check
 * @param {*} value - Value to compare against
 * @param {string} operator - Comparison operator ('===', '!==', '>', '<', '>=', '<=')
 * @returns {Function} - Filter function
 */
export const createPropertyFilter = (property, value, operator = '===') => {
  return (item) => {
    const itemValue = item[property];
    switch (operator) {
      case '===':
        return itemValue === value;
      case '!==':
        return itemValue !== value;
      case '>':
        return itemValue > value;
      case '<':
        return itemValue < value;
      case '>=':
        return itemValue >= value;
      case '<=':
        return itemValue <= value;
      default:
        return true;
    }
  };
};

/**
 * Creates a filter function that includes items based on productCategory patterns
 * @param {string[]} categories - Array of category patterns to include
 * @returns {Function} - Filter function
 */
export const createCategoryFilter = (categories = []) => {
  return (item) => {
    const category = item.productCategory?.toLowerCase() || '';
    return categories.some((cat) => category.includes(cat.toLowerCase()));
  };
};

/**
 * Creates a filter function that excludes items based on productCategory patterns
 * @param {string[]} categories - Array of category patterns to exclude
 * @returns {Function} - Filter function
 */
export const createCategoryExcludeFilter = (categories = []) => {
  return (item) => {
    const category = item.productCategory?.toLowerCase() || '';
    return !categories.some((cat) => category.includes(cat.toLowerCase()));
  };
};

/**
 * Combines multiple filter functions with AND logic
 * @param {Function[]} filters - Array of filter functions
 * @returns {Function} - Combined filter function
 */
export const combineFilters = (filters = []) => {
  return (item) => {
    return filters.every((filter) => filter(item));
  };
};
