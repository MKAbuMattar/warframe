import { Fragment, useState, useEffect, useCallback } from 'react'

import Navbar from '../Navbar/Navbar'

import useGetArchMelee from '../../hooks/useGetArchMelee'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import ArchMeleeWeaponIcon from '../../Icons/ArchMeleeWeaponIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards, Card, CardImg, CardTite, CardBtn } from '../../style/Style'
import ArchMeleeCard from '../ArchMeleeCard/ArchMeleeCard'

const ArchMelee = () => {
  const CDN_IMG_URL = process.env.NEXT_PUBLIC_CDN_IMG_URL

  const myLoader = ({ src, width, quality }) =>
    `${CDN_IMG_URL}/${src}?w=${width}&q=${quality || 75}`

  const { getArchMelee, getArchMeleeLoading, getArchMeleeError } =
    useGetArchMelee()

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
      <Background />
      <Navbar />

      {getArchMeleeLoading ? (
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
