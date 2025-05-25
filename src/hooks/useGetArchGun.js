import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetArchGun = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.archGun);

  return {
    getArchGun: data,
    getArchGunLoading: loading,
    getArchGunError: error,
  };
};

export default useGetArchGun;
