import { Fragment } from 'react'

import Navbar from '../Navbar/Navbar'

import WarframeCard from '../WarframeCard/WarframeCard'
import PrimaryCard from '../PrimaryCard/PrimaryCard'
import SecondaryCard from '../SecondaryCard/SecondaryCard'
import MeleeCard from '../MeleeCard/MeleeCard'

import useGetWarframe from '../../hooks/useGetWarframe'
import useGetPrimary from '../../hooks/useGetPrimary'
import useGetSecondary from '../../hooks/useGetSecondary'
import useGetMelee from '../../hooks/useGetMelee'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import { Cards } from '../../style/Style'

import { Container, SubTitle } from './Style'

const Home = () => {
  const { getWarframe, getWarframeLoading, getWarframeError } = useGetWarframe()
  const { getPrimary, getPrimaryLoading, getPrimaryError } = useGetPrimary()
  const { getSecondary, getSecondaryLoading, getSecondaryError } =
    useGetSecondary()
  const { getMelee, getMeleeLoading, getMeleeError } = useGetMelee()

  return (
    <Fragment>
      <Background />
      <Navbar />

      {getWarframeLoading &
      getPrimaryLoading &
      getSecondaryLoading &
      getMeleeLoading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : (
        <Fragment>
          <section className="container">
            <Container>
              <SubTitle>Last Warframe Added</SubTitle>
              <Cards>
                {getWarframe.length > 0 ? (
                  <Fragment>
                    {getWarframe.map((result, idx) =>
                      result.name.toLowerCase() === `Yareli`.toLowerCase() ? (
                        <Fragment>
                          <WarframeCard result={result} key={idx} idx={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                ) : (
                  <Fragment></Fragment>
                )}

                {getPrimary.length > 0 ? (
                  <Fragment>
                    {getPrimary.map((result, idx) =>
                      result.name.toLowerCase() === ``.toLowerCase() ? (
                        <Fragment>
                          <PrimaryCard result={result} key={idx} idx={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                ) : (
                  <Fragment></Fragment>
                )}

                {getSecondary.length > 0 ? (
                  <Fragment>
                    {getSecondary.map((result, idx) =>
                      result.name.toLowerCase() ===
                      `Kompressa`.toLowerCase() ? (
                        <Fragment>
                          <SecondaryCard result={result} key={idx} idx={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                ) : (
                  <Fragment> </Fragment>
                )}

                {getMelee.length > 0 ? (
                  <Fragment>
                    {getMelee.map((result, idx) =>
                      result.name.toLowerCase() === ``.toLowerCase() ? (
                        <Fragment>
                          <MeleeCard result={result} idx={idx} key={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                ) : (
                  <Fragment> </Fragment>
                )}
              </Cards>
            </Container>

            <Container>
              <SubTitle>Last Warframe Prime Added</SubTitle>
              <Cards>
                {getWarframe.length > 0 ? (
                  <Fragment>
                    {getWarframe.map((result, idx) =>
                      result.name.toLowerCase() ===
                      `Nidus Prime`.toLowerCase() ? (
                        <Fragment>
                          <WarframeCard result={result} key={idx} idx={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                ) : (
                  <Fragment> </Fragment>
                )}

                {getPrimary.length > 0 ? (
                  <Fragment>
                    {getPrimary.map((result, idx) =>
                      result.name.toLowerCase() ===
                      `Strun Prime`.toLowerCase() ? (
                        <Fragment>
                          <PrimaryCard result={result} key={idx} idx={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                ) : (
                  <Fragment> </Fragment>
                )}

                {getSecondary.length > 0 ? (
                  <Fragment>
                    {getSecondary.map((result, idx) =>
                      result.name.toLowerCase() ===
                      `Magnus Prime`.toLowerCase() ? (
                        <Fragment>
                          <SecondaryCard result={result} key={idx} idx={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                ) : (
                  <Fragment> </Fragment>
                )}

                {getMelee.length > 0 ? (
                  <Fragment>
                    {getMelee.map((result, idx) =>
                      result.name.toLowerCase() === ``.toLowerCase() ? (
                        <Fragment>
                          <MeleeCard result={result} idx={idx} key={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                ) : (
                  <Fragment> </Fragment>
                )}
              </Cards>
            </Container>
          </section>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Home
