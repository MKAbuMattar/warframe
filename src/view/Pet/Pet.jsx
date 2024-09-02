import {Fragment, useState, useEffect, useCallback} from 'react';

import PetCard from '../../components/PetCard/PetCard';

import useGetPet from '../../hooks/useGetPet';

import Loader from '../../util/Loader/Loader';

import FilterIt from '../../util/FilterIt/FilterIt';

import CompanionIcon from '../../Icons/CompanionIcon';

import {SearchSection, SearchInput, PageCounter} from '../../style/Style';

import {Cards} from '../../style/Style';

const Pet = () => {
  const {getPet, getPetLoading, getPetError} = useGetPet();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!getPetLoading) {
      setItems(getPet);
    }
  }, [getPetLoading]);

  const filterList = useCallback(
    ({target}) => {
      if (getPet.length > 0) {
        const searchQuery = target.value.toLowerCase();
        const updatedList = FilterIt(searchQuery, getPet);
        setItems(updatedList);
      }
    },
    [getPetLoading],
  );

  return (
    <Fragment>
      {getPetLoading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : (
        <Fragment>
          <section className="container">
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
                  <CompanionIcon color="#dddddd" size="50" />
                  Pets: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 1 && (
              <Fragment>
                <PageCounter>
                  <CompanionIcon color="#dddddd" size="50" />
                  Pet: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <CompanionIcon color="#dddddd" size="50" />
                  Pet: None
                </PageCounter>
              </Fragment>
            )}

            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <PetCard result={result} idx={idx} key={idx} />
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

export default Pet;
