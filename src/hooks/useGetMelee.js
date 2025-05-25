import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetMelee = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.melee);

  return {
    getMelee: data,
    getMeleeLoading: loading,
    getMeleeError: error,
  };
};

export default useGetMelee;
