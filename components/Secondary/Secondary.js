import { Fragment, useState, useEffect, useCallback } from 'react'

import Navbar from '../Navbar/Navbar'
import SecondaryCard from '../SecondaryCard/SecondaryCard'

import useGetSecondary from '../../hooks/useGetSecondary'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import SecondaryWeaponIcon from '../../Icons/SecondaryWeaponIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards } from '../../style/Style'

const Secondary = () => {
  const CDN_IMG_URL = process.env.NEXT_PUBLIC_CDN_IMG_URL

  const { getSecondary, getSecondaryLoading, getSecondaryError } =
    useGetSecondary()

  const [items, setItems] = useState([])

  useEffect(() => {
    if (!getSecondaryLoading) {
      setItems(getSecondary)
    }
  }, [getSecondaryLoading])

  const filterList = useCallback(
    ({ target }) => {
      if (getSecondary.length > 0) {
        const searchQuery = target.value.toLowerCase()
        const updatedList = FilterIt(searchQuery, getSecondary)
        setItems(updatedList)
      }
    },
    [getSecondaryLoading],
  )

  return (
    <Fragment>
      <Background />
      <Navbar />

      {getSecondaryLoading ? (
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
                  <SecondaryWeaponIcon color="#dddddd" size="50" /> Secondary
                  Weapons: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 1 && (
              <Fragment>
                <PageCounter>
                  <SecondaryWeaponIcon color="#dddddd" size="50" /> Secondary
                  Weapon: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <SecondaryWeaponIcon color="#dddddd" size="50" /> Secondary
                  Weapon: None
                </PageCounter>
              </Fragment>
            )}
            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <Fragment>
                      <SecondaryCard result={result} key={idx} idx={idx} />
                    </Fragment>
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

export default Secondary
