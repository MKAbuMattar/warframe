import { Fragment, useState, useEffect, useCallback } from 'react'

import QuestCard from '../../components/QuestCard/QuestCard'

import useGetQuest from '../../hooks/useGetQuest'

import Loader from '../../util/Loader/Loader'

import FilterIt from '../../util/FilterIt/FilterIt'

import QuestIcon from '../../Icons/QuestIcon'

import { SearchSection, SearchInput, PageCounter } from '../../style/Style'

import { Cards } from '../../style/Style'

const Quest = () => {
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
      {getQuestLoading ? (
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
                  <QuestIcon color="#dddddd" size="50" />
                  Quest: {items.length}
                </PageCounter>
              </Fragment>
            )}

            {items.length == 0 && (
              <Fragment>
                <PageCounter>
                  <QuestIcon color="#dddddd" size="50" />
                  Quest: None
                </PageCounter>
              </Fragment>
            )}

            <Cards>
              {items.length > 0 ? (
                <Fragment>
                  {items.map((result, idx) => (
                    <QuestCard result={result} idx={idx} key={idx} />
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
