import { Fragment, useState, useEffect, useCallback } from 'react'

import Navbar from '../Navbar/Navbar'

import useGetGear from '../../hooks/useGetGear'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import GearIcon from '../../Icons/GearIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards, Card, CardImg, CardTite, CardBtn } from '../../style/Style'

const Gear = () => {
  const CDN_IMG_URL = process.env.NEXT_PUBLIC_CDN_IMG_URL

  const myLoader = ({ src, width, quality }) =>
    `${CDN_IMG_URL}/${src}?w=${width}&q=${quality || 75}`

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
      <Background />
      <Navbar />

      {getGearLoading ? (
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

export default Gear
