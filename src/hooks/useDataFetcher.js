import {useState, useEffect, useCallback, useMemo} from 'react';
import {createApiClient, isCancelError} from '../util/apiClient';
import {deduplicate} from '../util/deduplicationUtils';
import {combineFilters} from '../util/filterUtils';
import getURI from '../util/getURI';

/**
 * Generic data fetching hook for Warframe API data
 * @param {Object} config - Configuration object
 * @param {string} config.endpoint - API endpoint name
 * @param {Function} config.ModelClass - Model class constructor
 * @param {Function|Function[]} config.filters - Filter function(s) to apply to data
 * @param {string} config.deduplicationStrategy - Strategy for removing duplicates
 * @param {Array} config.dependencies - Additional dependencies for useEffect
 * @returns {Object} - Object containing data, loading state, and error state
 */
const useDataFetcher = ({
  endpoint,
  ModelClass,
  filters = [],
  deduplicationStrategy = 'name',
  dependencies = [],
}) => {
  const url = useMemo(() => {
    const uri = getURI(endpoint);
    console.log('Generated URL for endpoint', endpoint, ':', uri);
    return uri;
  }, [endpoint]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  // Memoize the combined filter function
  const combinedFilter = useMemo(() => {
    const filterArray = Array.isArray(filters) ? filters : [filters];
    return filterArray.length > 0 ? combineFilters(filterArray) : null;
  }, [filters]);

  // Create the data processing function
  const processData = useCallback(
    (rawData) => {
      let processedData = rawData;

      // Apply filters if provided
      if (combinedFilter) {
        processedData = processedData.filter(combinedFilter);
      }

      // Create model instances
      if (ModelClass) {
        processedData = processedData.map((item) => new ModelClass(item));
      }

      // Apply deduplication
      processedData = deduplicate(processedData, deduplicationStrategy);

      return processedData;
    },
    [combinedFilter, ModelClass, deduplicationStrategy],
  );

  useEffect(() => {
    if (!url) {
      console.error('URL is null or undefined, cannot fetch data');
      setError(true);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(false);

    const {request, cancel} = createApiClient(url);

    request
      .then((response) => {
        const processedData = processData(response.data);
        setData(processedData);
        setLoading(false);
      })
      .catch((err) => {
        if (isCancelError(err)) return;
        setError(true);
        setLoading(false);
      });

    return () => cancel();
  }, [url, processData, ...dependencies]);

  return {
    data,
    loading,
    error,
  };
};

export default useDataFetcher;
