import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetPrimary = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.primary);

  return {
    getPrimary: data,
    getPrimaryLoading: loading,
    getPrimaryError: error,
  };
};

export default useGetPrimary;
