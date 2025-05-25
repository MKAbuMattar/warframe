import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetWarframe = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.warframe);

  return {
    getWarframe: data,
    getWarframeLoading: loading,
    getWarframeError: error,
  };
};

export default useGetWarframe;
