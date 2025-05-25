import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetGear = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.gear);

  return {
    getGear: data,
    getGearLoading: loading,
    getGearError: error,
  };
};

export default useGetGear;
