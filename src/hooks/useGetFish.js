import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetFish = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.fish);

  return {
    getFish: data,
    getFishLoading: loading,
    getFishError: error,
  };
};

export default useGetFish;
