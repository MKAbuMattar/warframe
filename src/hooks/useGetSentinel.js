import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetSentinel = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.sentinel);

  return {
    getSentinel: data,
    getSentinelLoading: loading,
    getSentinelError: error,
  };
};

export default useGetSentinel;
