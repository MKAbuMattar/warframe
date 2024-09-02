import {useState, useEffect} from 'react';

import axios from 'axios';

import Enemy from '../models/Enemy.model';

import getURI from '../util/getURI';

const useGetEnemy = () => {
  const url = getURI('Enemy');

  const [getEnemyLoading, setLoading] = useState(true);
  const [getEnemyError, setError] = useState(false);
  const [getEnemy, setGetEnemy] = useState([]);

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
          if (result.name.toLowerCase() !== 'Kuva'.toLowerCase())
            if (result.name.toLowerCase() !== 'Commander'.toLowerCase())
              if (result.name.toLowerCase() !== 'Zanuka'.toLowerCase())
                formatData.push(new Enemy(result));
        });

        setGetEnemy(
          [...new Set(formatData)].reduce((unique, o) => {
            if (!unique.some((obj) => obj.name === o.name)) {
              unique.push(o);
            }
            return unique;
          }, []),
        );
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cansle();
  }, []);

  return {getEnemy, getEnemyLoading, getEnemyError};
};

export default useGetEnemy;
