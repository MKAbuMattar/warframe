import { Fragment, useState, useEffect, useCallback } from 'react'

import Navbar from '../Navbar/Navbar'

import useGetArchGun from '../../hooks/useGetArchGun'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import ArchGunWeaponIcon from '../../Icons/ArchGunWeaponIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards, Card, CardImg, CardTite, CardBtn } from '../../style/Style'

const ArchGun = () => {
  const CDN_IMG_URL = process.env.NEXT_PUBLIC_CDN_IMG_URL

  const myLoader = ({ src, width, quality }) =>
    `${CDN_IMG_URL}/${src}?w=${width}&q=${quality || 75}`

  const { getArchGun, getArchGunLoading, getArchGunError } = useGetArchGun()

  const [items, setItems] = useState([])

  useEffect(() => {
    if (!getArchGunLoading) {
      setItems(getArchGun)
    }
  }, [getArchGunLoading])

  const filterList = useCallback(
    ({ target }) => {
      if (getArchGun.length > 0) {
        const searchQuery = target.value.toLowerCase()
        const updatedList = FilterIt(searchQuery, getArchGun)
        setItems(updatedList)
      }
    },
    [getArchGunLoading],
  )

  return (
    <Fragment>
      <Background />
      <Navbar />

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
                    <Card key={idx}>
                      <CardImg
                        loader={myLoader}
                        src={result.imageName}
                        title={result.name}
                        alt={`Name: ${result.name}\n\rDescription:${result.description}\n\rPassive${result.passiveDescription}`}
                        width={300}
                        height={300}
                        objectFit="contain"
                      />
                      <CardTite>{result.name}</CardTite>
                      <CardBtn>Info</CardBtn>
                    </Card>
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

export default ArchGun
