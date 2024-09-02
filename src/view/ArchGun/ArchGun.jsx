import {Fragment, useState, useEffect, useCallback} from 'react';

import useGetArchGun from '../../hooks/useGetArchGun';

import Loader from '../../util/Loader/Loader';

import FilterIt from '../../util/FilterIt/FilterIt';

import ArchGunWeaponIcon from '../../Icons/ArchGunWeaponIcon';

import {SearchSection, SearchInput, PageCounter} from '../../style/Style';

import {Cards} from '../../style/Style';
import ArchGunCard from '../../components/ArchGunCard/ArchGunCard';

const ArchGun = () => {
  const {getArchGun, getArchGunLoading, getArchGunError} = useGetArchGun();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!getArchGunLoading) {
      setItems(getArchGun);
    }
  }, [getArchGunLoading]);

  const filterList = useCallback(
    ({target}) => {
      if (getArchGun.length > 0) {
        const searchQuery = target.value.toLowerCase();
        const updatedList = FilterIt(searchQuery, getArchGun);
        setItems(updatedList);
      }
    },
    [getArchGunLoading],
  );

  return (
    <Fragment>
      {getArchGunLoading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : (
        <Fragment>
          <SearchSection id="search">
            <SearchInput
              type="text"
              placeholder="Search"
              onChange={filterList}
            />
          </SearchSection>

          {items.length > 1 && (
            <Fragment>
              <PageCounter>
                <ArchGunWeaponIcon color="#dddddd" size="50" />
                ArchGun Weapons: {items.length}
              </PageCounter>
            </Fragment>
          )}

          {items.length == 1 && (
            <Fragment>
              <PageCounter>
                <ArchGunWeaponIcon color="#dddddd" size="50" />
                ArchGun Weapon: {items.length}
              </PageCounter>
            </Fragment>
          )}

          {items.length == 0 && (
            <Fragment>
              <PageCounter>
                <ArchGunWeaponIcon color="#dddddd" size="50" />
                ArchGun Weapon: None
              </PageCounter>
            </Fragment>
          )}

          <section className="container">
            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <ArchGunCard result={result} idx={idx} key={idx} />
                  ))}
                </Fragment>
              ) : (
                <Fragment></Fragment>
              )}
            </Cards>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ArchGun;
