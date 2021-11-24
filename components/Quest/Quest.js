import { Fragment, useState, useEffect, useCallback } from 'react'

import Navbar from '../Navbar/Navbar'

import useGetQuest from '../../hooks/useGetQuest'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import { SearchSection, SearchInput } from '../../style/Style'

import { Cards, Card, CardImg, CardTite, CardBtn } from '../../style/Style'

const Quest = () => {
  const CDN_IMG_URL = process.env.NEXT_PUBLIC_CDN_IMG_URL

  const { getQuest, getQuestLoading, getQuestError } = useGetQuest()

  const [items, setItems] = useState([])

  useEffect(() => {
    if (!getQuestLoading) {
      setItems(getQuest)
    }
  }, [getQuestLoading])

  const filterList = useCallback(
    ({ target }) => {
      if (getQuest.length > 0) {
        const searchQuery = target.value.toLowerCase()
        const updatedList = FilterIt(searchQuery, getQuest)
        setItems(updatedList)
      }
    },
    [getQuestLoading],
  )

  return (
    <Fragment>
      <Background />
      <Navbar />

      <SearchSection id="search">
        <SearchInput type="text" placeholder="Search" onChange={filterList} />
      </SearchSection>

      {getQuestLoading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : (
        <Fragment>
          <section className="container">
            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <Card key={idx}>
                      <CardImg
                        src={`${CDN_IMG_URL}${result.imageName}`}
                        alt={result.name}
                        title={result.name}
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

export default Quest
