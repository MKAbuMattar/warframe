import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetNecramech = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.necramech);

  return {
    getNecramech: data,
    getNecramechLoading: loading,
    getNecramechError: error,
  };
};

export default useGetNecramech;
