import { Fragment, useState, useEffect, useCallback } from 'react'

import GearCard from '../../components/GearCard/GearCard'

import useGetGear from '../../hooks/useGetGear'

import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import GearIcon from '../../Icons/GearIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards } from '../../style/Style'

const Gear = () => {
  const { getGear, getGearLoading, getGearError } = useGetGear()

  const [items, setItems] = useState([])

  useEffect(() => {
    if (!getGearLoading) {
      setItems(getGear)
    }
  }, [getGearLoading])

  const filterList = useCallback(
    ({ target }) => {
      if (getGear.length > 0) {
        const searchQuery = target.value.toLowerCase()
        const updatedList = FilterIt(searchQuery, getGear)
        setItems(updatedList)
      }
    },
    [getGearLoading],
  )

  return (
    <Fragment>
      {getGearLoading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : (
        <Fragment>
          <section className="container">
            <SearchSection id="search">
              <SearchInput type="text" placeholder="Search" onChange={filterList} />
            </SearchSection>

            {items.length > 1 && (
              <Fragment>
                <PageCounter>
                  <GearIcon color="#dddddd" size="50" />
                  Gear: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <GearIcon color="#dddddd" size="50" />
                  Gear: None
                </PageCounter>
              </Fragment>
            )}

            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <GearCard result={result} idx={idx} key={idx} />
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
  )
}

export default Gear
