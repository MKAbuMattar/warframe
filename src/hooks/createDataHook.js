import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

/**
 * Generic factory for creating data fetching hooks
 * @param {string} entityName - Name of the entity (matches DATA_CONFIGS key)
 * @returns {Function} - Hook function that returns {data, loading, error}
 */
const createDataHook = (entityName) => {
  return () => {
    const config = DATA_CONFIGS[entityName];

    if (!config) {
      throw new Error(
        `Unknown entity name: ${entityName}. Check DATA_CONFIGS.`,
      );
    }

    const {data, loading, error} = useDataFetcher(config);

    // Return with generic naming convention
    return {
      data,
      loading,
      error,
      // Legacy naming for backward compatibility
      [`get${entityName.charAt(0).toUpperCase()}${entityName.slice(1)}`]: data,
      [`get${entityName.charAt(0).toUpperCase()}${entityName.slice(1)}Loading`]:
        loading,
      [`get${entityName.charAt(0).toUpperCase()}${entityName.slice(1)}Error`]:
        error,
    };
  };
};

/**
 * Factory to create multiple data hooks at once
 * @param {string[]} entityNames - Array of entity names
 * @returns {Object} - Object with hook functions keyed by entity name
 */
export const createDataHooks = (entityNames) => {
  return entityNames.reduce((hooks, entityName) => {
    const hookName = `useGet${entityName.charAt(0).toUpperCase()}${entityName.slice(1)}`;
    hooks[hookName] = createDataHook(entityName);
    return hooks;
  }, {});
};

export default createDataHook;
