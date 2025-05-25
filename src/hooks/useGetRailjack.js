import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetRailjack = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.railjack);

  return {
    getRailjack: data,
    getRailjackLoading: loading,
    getRailjackError: error,
  };
};

export default useGetRailjack;
