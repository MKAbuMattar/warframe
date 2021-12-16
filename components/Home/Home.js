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

import { newWarframe, newWarframePrime } from '../../util/TheList/TheList'
import { newPrimary, newSecondary, newMelee } from '../../util/TheList/TheList'

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
              <SubTitle>Last Warframe Added And Signature Weapon</SubTitle>
              <Cards>
                {getWarframe.length > 0 ? (
                  <Fragment>
                    {getWarframe.map((result, idx) =>
                      result.name.toLowerCase() ===
                      `${newWarframe.warframe}`.toLowerCase() ? (
                        <Fragment key={idx}>
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
                      result.name.toLowerCase() ===
                      `${newWarframe.primary}`.toLowerCase() ? (
                        <Fragment key={idx}>
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
                      `${newWarframe.secondary}`.toLowerCase() ? (
                        <Fragment key={idx}>
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
                      result.name.toLowerCase() ===
                      `${newWarframe.melee}`.toLowerCase() ? (
                        <Fragment key={idx}>
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
              <SubTitle>
                Last Warframe Prime Added And Signature Weapon
              </SubTitle>
              <Cards>
                {getWarframe.length > 0 ? (
                  <Fragment>
                    {getWarframe.map((result, idx) =>
                      result.name.toLowerCase() ===
                      `${newWarframePrime.warframe}`.toLowerCase() ? (
                        <Fragment key={idx}>
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
                      `${newWarframePrime.primary}`.toLowerCase() ? (
                        <Fragment key={idx}>
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
                      `${newWarframePrime.secondary}`.toLowerCase() ? (
                        <Fragment key={idx}>
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
                      result.name.toLowerCase() ===
                      `${newWarframePrime.melee}`.toLowerCase() ? (
                        <Fragment key={idx}>
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
              {newPrimary.length > 0 && (
                <SubTitle>Last Primary Weapons Added</SubTitle>
              )}
              <Cards>
                {getPrimary.length > 0 ? (
                  <Fragment>
                    {getPrimary.map((result, idx) =>
                      newPrimary.map((name) => (
                        <Fragment>
                          {result.name.toLowerCase() ===
                          `${name}`.toLowerCase() ? (
                            <Fragment key={idx}>
                              <PrimaryCard
                                result={result}
                                key={idx}
                                idx={idx}
                              />
                            </Fragment>
                          ) : (
                            <Fragment key={idx}></Fragment>
                          )}
                        </Fragment>
                      )),
                    )}
                  </Fragment>
                ) : (
                  <Fragment></Fragment>
                )}
              </Cards>

              {newSecondary.length > 0 && (
                <SubTitle>Last Secondary Weapons Added</SubTitle>
              )}
              <Cards>
                {getSecondary.length > 0 ? (
                  <Fragment>
                    {getSecondary.map((result, idx) =>
                      newSecondary.map((name) => (
                        <Fragment>
                          {result.name.toLowerCase() ===
                          `${name}`.toLowerCase() ? (
                            <Fragment key={idx}>
                              <SecondaryCard
                                result={result}
                                key={idx}
                                idx={idx}
                              />
                            </Fragment>
                          ) : (
                            <Fragment key={idx}></Fragment>
                          )}
                        </Fragment>
                      )),
                    )}
                  </Fragment>
                ) : (
                  <Fragment></Fragment>
                )}
              </Cards>

              {newMelee.length > 0 && (
                <SubTitle>Last Melee Weapons Added</SubTitle>
              )}
              <Cards>
                {getMelee.length > 0 ? (
                  <Fragment>
                    {getMelee.map((result, idx) =>
                      newMelee.map((name) => (
                        <Fragment>
                          {result.name.toLowerCase() ===
                          `${name}`.toLowerCase() ? (
                            <Fragment key={idx}>
                              <MeleeCard result={result} key={idx} idx={idx} />
                            </Fragment>
                          ) : (
                            <Fragment key={idx}></Fragment>
                          )}
                        </Fragment>
                      )),
                    )}
                  </Fragment>
                ) : (
                  <Fragment></Fragment>
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
