import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetArchwing = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.archwing);

  return {
    getArchwing: data,
    getArchwingLoading: loading,
    getArchwingError: error,
  };
};

export default useGetArchwing;
