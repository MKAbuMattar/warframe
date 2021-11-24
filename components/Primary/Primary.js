import { Fragment, useState, useEffect, useCallback } from 'react'

import Navbar from '../Navbar/Navbar'
import PrimaryCard from '../PrimaryCard/PrimaryCard'

import useGetPrimary from '../../hooks/useGetPrimary'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import PrimaryWeaponIcon from '../../Icons/PrimaryWeaponIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards } from '../../style/Style'

const Primary = () => {
  const { getPrimary, getPrimaryLoading, getPrimaryError } = useGetPrimary()

  const [items, setItems] = useState([])

  useEffect(() => {
    if (!getPrimaryLoading) {
      setItems(getPrimary)
    }
  }, [getPrimaryLoading])

  const filterList = useCallback(
    ({ target }) => {
      if (getPrimary.length > 0) {
        const searchQuery = target.value.toLowerCase()
        const updatedList = FilterIt(searchQuery, getPrimary)
        setItems(updatedList)
      }
    },
    [getPrimaryLoading],
  )

  return (
    <Fragment>
      <Background />
      <Navbar />

      {getPrimaryLoading ? (
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
                  <PrimaryWeaponIcon color="#dddddd" size="50" />
                  Primary Weapons: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 1 && (
              <Fragment>
                <PageCounter>
                  <PrimaryWeaponIcon color="#dddddd" size="50" />
                  Primary Weapon: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <PrimaryWeaponIcon color="#dddddd" size="50" />
                  Primary Weapon: None
                </PageCounter>
              </Fragment>
            )}
            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <PrimaryCard result={result} idx={idx} key={idx} />
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

export default Primary
