import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetSecondary = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.secondary);

  return {
    getSecondary: data,
    getSecondaryLoading: loading,
    getSecondaryError: error,
  };
};

export default useGetSecondary;
