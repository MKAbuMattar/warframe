import { Fragment, useState, useEffect, useCallback } from 'react'

import SentinelWeaponCard from '../../components/SentinelWeaponCard/SentinelWeaponCard'

import useGetSentinelWeapon from '../../hooks/useGetSentinelWeapon'

import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import SentinelIcon from '../../Icons/SentinelIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards } from '../../style/Style'

const SentinelWeapon = () => {
  const { getSentinelWeapon, getSentinelWeaponLoading, getSentinelWeaponError } =
    useGetSentinelWeapon()

  const [items, setItems] = useState([])

  useEffect(() => {
    if (!getSentinelWeaponLoading) {
      setItems(getSentinelWeapon)
    }
  }, [getSentinelWeaponLoading])

  const filterList = useCallback(
    ({ target }) => {
      if (getSentinelWeapon.length > 0) {
        const searchQuery = target.value.toLowerCase()
        const updatedList = FilterIt(searchQuery, getSentinelWeapon)
        setItems(updatedList)
      }
    },
    [getSentinelWeaponLoading],
  )

  return (
    <Fragment>
      {getSentinelWeaponLoading ? (
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
                  <SentinelIcon color="#dddddd" size="50" /> Sentinel Weapons: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 1 && (
              <Fragment>
                <PageCounter>
                  <SentinelIcon color="#dddddd" size="50" /> Sentinel Weapon: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <SentinelIcon color="#dddddd" size="50" /> Sentinel Weapon: None
                </PageCounter>
              </Fragment>
            )}

            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <SentinelWeaponCard result={result} idx={idx} key={idx} />
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

export default SentinelWeapon
