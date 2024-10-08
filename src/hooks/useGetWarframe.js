import {useState, useEffect} from 'react';

import axios from 'axios';

import Warframe from '../models/Warframe.model';

import getURI from '../util/getURI';

const useGetWarframe = () => {
  const url = getURI('Warframes');

  const [getWarframeLoading, setLoading] = useState(true);
  const [getWarframeError, setError] = useState(false);
  const [getWarframe, setGetWarframe] = useState([]);

  let formatData = [];

  useEffect(() => {
    setLoading(true);
    setError(false);

    let cansle;

    axios({
      method: 'GET',
      url: `${url}`,
      cancelToken: new axios.CancelToken((c) => (cansle = c)),
    })
      .then((res) => {
        res.data.forEach((result) => {
          if (result.stamina <= 5) {
            formatData.push(new Warframe(result));
          }
        });
        let uniq = [...new Set(formatData)];
        setGetWarframe(uniq);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cansle();
  }, []);

  return {getWarframe, getWarframeLoading, getWarframeError};
};

export default useGetWarframe;
