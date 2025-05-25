import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetSkin = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.skin);

  return {
    getSkin: data,
    getSkinLoading: loading,
    getSkinError: error,
  };
};

export default useGetSkin;
