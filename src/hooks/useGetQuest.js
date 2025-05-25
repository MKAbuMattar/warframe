import useDataFetcher from './useDataFetcher';
import {DATA_CONFIGS} from '../config/dataConfigs';

const useGetQuest = () => {
  const {data, loading, error} = useDataFetcher(DATA_CONFIGS.quest);

  return {
    getQuest: data,
    getQuestLoading: loading,
    getQuestError: error,
  };
};

export default useGetQuest;
