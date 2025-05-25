import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetResource = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.resource);

  return {
    getResource: data,
    getResourceLoading: loading,
    getResourceError: error,
  };
};

export default useGetResource;
