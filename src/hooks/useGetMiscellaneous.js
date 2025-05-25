import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetMiscellaneous = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.miscellaneous);

  return {
    getMiscellaneous: data,
    getMiscellaneousLoading: loading,
    getMiscellaneousError: error,
  };
};

export default useGetMiscellaneous;
