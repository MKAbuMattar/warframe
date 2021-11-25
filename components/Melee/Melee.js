import { Fragment, useState, useEffect, useCallback } from 'react'

import Navbar from '../Navbar/Navbar'
import MeleeCard from '../MeleeCard/MeleeCard'

import useGetMelee from '../../hooks/useGetMelee'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import MeleeWeaponIcon from '../../Icons/MeleeWeaponIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards } from '../../style/Style'

const Melee = () => {
  const { getMelee, getMeleeLoading, getMeleeError } = useGetMelee()

  const [items, setItems] = useState([])

  useEffect(() => {
    if (!getMeleeLoading) {
      setItems(getMelee)
    }
  }, [getMeleeLoading])

  const filterList = useCallback(
    ({ target }) => {
      if (getMelee.length > 0) {
        const searchQuery = target.value.toLowerCase()
        const updatedList = FilterIt(searchQuery, getMelee)
        setItems(updatedList)
      }
    },
    [getMeleeLoading],
  )

  return (
    <Fragment>
      <Background />
      <Navbar />

      {getMeleeLoading ? (
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
                  <MeleeWeaponIcon color="#dddddd" size="50" />
                  Melee Weapons: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 1 && (
              <Fragment>
                <PageCounter>
                  <MeleeWeaponIcon color="#dddddd" size="50" />
                  Melee Weapon: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <MeleeWeaponIcon color="#dddddd" size="50" />
                  Melee Weapon: None
                </PageCounter>
              </Fragment>
            )}

            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <MeleeCard result={result} idx={idx} key={idx} />
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

export default Melee
