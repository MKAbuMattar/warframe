import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetArcane = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.arcane);

  return {
    getArcane: data,
    getArcaneLoading: loading,
    getArcaneError: error,
  };
};

export default useGetArcane;
