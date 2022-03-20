import { Fragment } from 'react'

import Navbar from '../Navbar/Navbar'

import WarframeCard from '../WarframeCard/WarframeCard'
import ArchwingCard from '../ArchwingCard/ArchwingCard'
import PrimaryCard from '../PrimaryCard/PrimaryCard'
import SecondaryCard from '../SecondaryCard/SecondaryCard'
import MeleeCard from '../MeleeCard/MeleeCard'
import ArchGunCard from '../ArchGunCard/ArchGunCard'
import SentinelCard from '../SentinelCard/SentinelCard'
import SentinelWeaponCard from '../SentinelWeaponCard/SentinelWeaponCard'

import useGetWarframe from '../../hooks/useGetWarframe'
import useGetArchwing from '../../hooks/useGetArchwing'
import useGetPrimary from '../../hooks/useGetPrimary'
import useGetSecondary from '../../hooks/useGetSecondary'
import useGetMelee from '../../hooks/useGetMelee'
import useGetArchGun from '../../hooks/useGetArchGun'
import useGetSentinel from '../../hooks/useGetSentinel'
import useGetSentinelWeapon from '../../hooks/useGetSentinelWeapon'

import Background from '../../util/Background/Background'
import Loader from '../../util/Loader/Loader'

import { newWarframe, newWarframePrime } from '../../util/TheList/TheList'
import {
  newPrimary,
  newSecondary,
  newMelee,
  newSentinel,
  newSentinelWeapon,
  newArchwing,
  newArchGun,
} from '../../util/TheList/TheList'

import { Cards } from '../../style/Style'

import { Container, SubTitle } from './Style'

const Home = () => {
  const { getWarframe, getWarframeLoading, getWarframeError } = useGetWarframe()
  const { getArchwing, getArchwingLoading, getArchwingError } = useGetArchwing()
  const { getPrimary, getPrimaryLoading, getPrimaryError } = useGetPrimary()
  const { getSecondary, getSecondaryLoading, getSecondaryError } = useGetSecondary()
  const { getMelee, getMeleeLoading, getMeleeError } = useGetMelee()
  const { getArchGun, getArchGunLoading, getArchGunError } = useGetArchGun()
  const { getSentinel, getSentinelLoading, getSentinelError } = useGetSentinel()
  const { getSentinelWeapon, getSentinelWeaponLoading, getSentinelWeaponError } =
    useGetSentinelWeapon()

  return (
    <Fragment>
      <Background />
      <Navbar />

      {getWarframeLoading &
      getArchwingLoading &
      getPrimaryLoading &
      getSecondaryLoading &
      getMeleeLoading &
      getArchGunLoading &
      getSentinelLoading &
      getSentinelWeaponLoading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : (
        <Fragment>
          <section className="container">
            <Container>
              <SubTitle>Last Warframe Added And Signature Weapon</SubTitle>
              <Cards>
                {newWarframe.warframe.length > 0 && (
                  <Fragment>
                    {getWarframe.map((result, idx) =>
                      result.name.toLowerCase() === `${newWarframe.warframe}`.toLowerCase() ? (
                        <Fragment key={idx}>
                          <WarframeCard result={result} key={idx} idx={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                )}

                {newWarframe.archwing.length > 0 && (
                  <Fragment>
                    {getArchwing.map((result, idx) =>
                      result.name.toLowerCase() === `${newWarframe.archwing}`.toLowerCase() ? (
                        <Fragment key={idx}>
                          <ArchwingCard result={result} key={idx} idx={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                )}

                {newWarframe.primary.length > 0 && (
                  <Fragment>
                    {getPrimary.map((result, idx) =>
                      result.name.toLowerCase() === `${newWarframe.primary}`.toLowerCase() ? (
                        <Fragment key={idx}>
                          <PrimaryCard result={result} key={idx} idx={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                )}

                {newWarframe.secondary.length > 0 && (
                  <Fragment>
                    {getSecondary.map((result, idx) =>
                      result.name.toLowerCase() === `${newWarframe.secondary}`.toLowerCase() ? (
                        <Fragment key={idx}>
                          <SecondaryCard result={result} key={idx} idx={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                )}

                {newWarframe.melee.length > 0 && (
                  <Fragment>
                    {getMelee.map((result, idx) =>
                      result.name.toLowerCase() === `${newWarframe.melee}`.toLowerCase() ? (
                        <Fragment key={idx}>
                          <MeleeCard result={result} idx={idx} key={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                )}

                {newWarframe.archGun.length > 0 && (
                  <Fragment>
                    {getArchGun.map((result, idx) =>
                      result.name.toLowerCase() === `${newWarframe.archGun}`.toLowerCase() ? (
                        <Fragment key={idx}>
                          <ArchGunCard result={result} idx={idx} key={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                )}

                {newWarframe.sentinel.length > 0 && (
                  <Fragment>
                    {getSentinel.map((result, idx) =>
                      result.name.toLowerCase() === `${newWarframe.sentinel}`.toLowerCase() ? (
                        <Fragment key={idx}>
                          <SentinelCard result={result} idx={idx} key={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                )}

                {newWarframe.sentinelWeapon.length > 0 && (
                  <Fragment>
                    {getSentinelWeapon.map((result, idx) =>
                      result.name.toLowerCase() ===
                      `${newWarframe.sentinelWeapon}`.toLowerCase() ? (
                        <Fragment key={idx}>
                          <SentinelWeaponCard result={result} idx={idx} key={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                )}
              </Cards>
            </Container>

            <Container>
              <SubTitle>Last Warframe Prime Added And Signature Weapon</SubTitle>
              <Cards>
                {newWarframePrime.warframe.length > 0 && (
                  <Fragment>
                    {getWarframe.map((result, idx) =>
                      result.name.toLowerCase() === `${newWarframePrime.warframe}`.toLowerCase() ? (
                        <Fragment key={idx}>
                          <WarframeCard result={result} key={idx} idx={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                )}

                {newWarframePrime.archwing.length > 0 && (
                  <Fragment>
                    {getArchwing.map((result, idx) =>
                      result.name.toLowerCase() === `${newWarframePrime.archwing}`.toLowerCase() ? (
                        <Fragment key={idx}>
                          <ArchwingCard result={result} key={idx} idx={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                )}

                {newWarframePrime.primary.length > 0 && (
                  <Fragment>
                    {getPrimary.map((result, idx) =>
                      result.name.toLowerCase() === `${newWarframePrime.primary}`.toLowerCase() ? (
                        <Fragment key={idx}>
                          <PrimaryCard result={result} key={idx} idx={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                )}

                {newWarframePrime.secondary.length > 0 && (
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
                )}

                {newWarframePrime.melee.length > 0 && (
                  <Fragment>
                    {getMelee.map((result, idx) =>
                      result.name.toLowerCase() === `${newWarframePrime.melee}`.toLowerCase() ? (
                        <Fragment key={idx}>
                          <MeleeCard result={result} idx={idx} key={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                )}

                {newWarframePrime.archGun.length > 0 && (
                  <Fragment>
                    {getArchGun.map((result, idx) =>
                      result.name.toLowerCase() === `${newWarframePrime.archGun}`.toLowerCase() ? (
                        <Fragment key={idx}>
                          <ArchGunCard result={result} idx={idx} key={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                )}

                {newWarframePrime.sentinel.length > 0 && (
                  <Fragment>
                    {getSentinel.map((result, idx) =>
                      result.name.toLowerCase() === `${newWarframePrime.sentinel}`.toLowerCase() ? (
                        <Fragment key={idx}>
                          <SentinelCard result={result} idx={idx} key={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                )}

                {newWarframePrime.sentinelWeapon.length > 0 && (
                  <Fragment>
                    {getSentinelWeapon.map((result, idx) =>
                      result.name.toLowerCase() ===
                      `${newWarframePrime.sentinelWeapon}`.toLowerCase() ? (
                        <Fragment key={idx}>
                          <SentinelWeaponCard result={result} idx={idx} key={idx} />
                        </Fragment>
                      ) : (
                        <Fragment key={idx}></Fragment>
                      ),
                    )}
                  </Fragment>
                )}
              </Cards>
            </Container>

            <Container>
              {newPrimary.length > 0 && (
                <Fragment>
                  <SubTitle>Last Primary Weapons Added</SubTitle>

                  <Cards>
                    {getPrimary.map((result, idx) =>
                      newPrimary.map((name, i) => (
                        <Fragment key={i}>
                          {result.name.toLowerCase() === `${name}`.toLowerCase() ? (
                            <Fragment key={idx}>
                              <PrimaryCard result={result} key={idx} idx={idx} />
                            </Fragment>
                          ) : (
                            <Fragment key={idx}></Fragment>
                          )}
                        </Fragment>
                      )),
                    )}
                  </Cards>
                </Fragment>
              )}

              {newSecondary.length > 0 && (
                <Fragment>
                  <SubTitle>Last Secondary Weapons Added</SubTitle>

                  <Cards>
                    {getSecondary.map((result, idx) =>
                      newSecondary.map((name, i) => (
                        <Fragment key={i}>
                          {result.name.toLowerCase() === `${name}`.toLowerCase() ? (
                            <Fragment key={idx}>
                              <SecondaryCard result={result} key={idx} idx={idx} />
                            </Fragment>
                          ) : (
                            <Fragment key={idx}></Fragment>
                          )}
                        </Fragment>
                      )),
                    )}
                  </Cards>
                </Fragment>
              )}

              {newMelee.length > 0 && (
                <Fragment>
                  <SubTitle>Last Melee Weapons Added</SubTitle>

                  <Cards>
                    {getMelee.map((result, idx) =>
                      newMelee.map((name, i) => (
                        <Fragment key={i}>
                          {result.name.toLowerCase() === `${name}`.toLowerCase() ? (
                            <Fragment key={idx}>
                              <MeleeCard result={result} key={idx} idx={idx} />
                            </Fragment>
                          ) : (
                            <Fragment key={idx}></Fragment>
                          )}
                        </Fragment>
                      )),
                    )}
                  </Cards>
                </Fragment>
              )}

              {newSentinel.length > 0 && (
                <Fragment>
                  <SubTitle>Last Sentinel Added</SubTitle>

                  <Cards>
                    {getSentinel.map((result, idx) =>
                      newSentinel.map((name, i) => (
                        <Fragment key={i}>
                          {result.name.toLowerCase() === `${name}`.toLowerCase() ? (
                            <Fragment key={idx}>
                              <MeleeCard result={result} key={idx} idx={idx} />
                            </Fragment>
                          ) : (
                            <Fragment key={idx}></Fragment>
                          )}
                        </Fragment>
                      )),
                    )}
                  </Cards>
                </Fragment>
              )}

              {newSentinelWeapon.length > 0 && (
                <Fragment>
                  <SubTitle>Last Sentinel Weapons Added</SubTitle>

                  <Cards>
                    {getSentinelWeapon.map((result, idx) =>
                      newSentinelWeapon.map((name, i) => (
                        <Fragment key={i}>
                          {result.name.toLowerCase() === `${name}`.toLowerCase() ? (
                            <Fragment key={idx}>
                              <SentinelWeaponCard result={result} key={idx} idx={idx} />
                            </Fragment>
                          ) : (
                            <Fragment key={idx}></Fragment>
                          )}
                        </Fragment>
                      )),
                    )}
                  </Cards>
                </Fragment>
              )}

              {newArchwing.length > 0 && (
                <Fragment>
                  <SubTitle>Last Archwing Added</SubTitle>

                  <Cards>
                    {getArchwing.map((result, idx) =>
                      newArchwing.map((name, i) => (
                        <Fragment key={i}>
                          {result.name.toLowerCase() === `${name}`.toLowerCase() ? (
                            <Fragment key={idx}>
                              <ArchwingCard result={result} key={idx} idx={idx} />
                            </Fragment>
                          ) : (
                            <Fragment key={idx}></Fragment>
                          )}
                        </Fragment>
                      )),
                    )}
                  </Cards>
                </Fragment>
              )}

              {newArchGun.length > 0 && (
                <Fragment>
                  <SubTitle>Last Arch-Gun Weapons Added</SubTitle>

                  <Cards>
                    {getArchGun.map((result, idx) =>
                      newArchGun.map((name, i) => (
                        <Fragment key={i}>
                          {result.name.toLowerCase() === `${name}`.toLowerCase() ? (
                            <Fragment key={idx}>
                              <ArchGunCard result={result} key={idx} idx={idx} />
                            </Fragment>
                          ) : (
                            <Fragment key={idx}></Fragment>
                          )}
                        </Fragment>
                      )),
                    )}
                  </Cards>
                </Fragment>
              )}
            </Container>
          </section>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Home
