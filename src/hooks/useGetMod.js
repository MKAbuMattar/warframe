import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetMod = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.mod);

  return {
    getMod: data,
    getModLoading: loading,
    getModError: error,
  };
};

export default useGetMod;
