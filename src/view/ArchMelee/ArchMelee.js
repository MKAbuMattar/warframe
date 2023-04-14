import { Fragment, useState, useEffect, useCallback } from 'react'

import useGetArchMelee from '../../hooks/useGetArchMelee'

import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import ArchMeleeWeaponIcon from '../../Icons/ArchMeleeWeaponIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards } from '../../style/Style'
import ArchMeleeCard from '../../components/ArchMeleeCard/ArchMeleeCard'

const ArchMelee = () => {
  const { getArchMelee, getArchMeleeLoading, getArchMeleeError } = useGetArchMelee()

  const [items, setItems] = useState([])

  useEffect(() => {
    if (!getArchMeleeLoading) {
      setItems(getArchMelee)
    }
  }, [getArchMeleeLoading])

  const filterList = useCallback(
    ({ target }) => {
      if (getArchMelee.length > 0) {
        const searchQuery = target.value.toLowerCase()
        const updatedList = FilterIt(searchQuery, getArchMelee)
        setItems(updatedList)
      }
    },
    [getArchMeleeLoading],
  )

  return (
    <Fragment>
      {getArchMeleeLoading ? (
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
                  <ArchMeleeWeaponIcon color="#dddddd" size="50" />
                  ArchMelee Weapons: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 1 && (
              <Fragment>
                <PageCounter>
                  <ArchMeleeWeaponIcon color="#dddddd" size="50" />
                  ArchMelee Weapon: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <ArchMeleeWeaponIcon color="#dddddd" size="50" />
                  ArchMelee Weapon: None
                </PageCounter>
              </Fragment>
            )}

            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <ArchMeleeCard result={result} idx={idx} key={idx} />
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

export default ArchMelee
