import { Fragment } from 'react'

import WarframeCard from '../../components/WarframeCard/WarframeCard'
import ArchwingCard from '../../components/ArchwingCard/ArchwingCard'
import PrimaryCard from '../../components/PrimaryCard/PrimaryCard'
import SecondaryCard from '../../components/SecondaryCard/SecondaryCard'
import MeleeCard from '../../components/MeleeCard/MeleeCard'
import ArchGunCard from '../../components/ArchGunCard/ArchGunCard'
import SentinelCard from '../../components/SentinelCard/SentinelCard'
import SentinelWeaponCard from '../../components/SentinelWeaponCard/SentinelWeaponCard'

import useGetWarframe from '../../hooks/useGetWarframe'
import useGetArchwing from '../../hooks/useGetArchwing'
import useGetPrimary from '../../hooks/useGetPrimary'
import useGetSecondary from '../../hooks/useGetSecondary'
import useGetMelee from '../../hooks/useGetMelee'
import useGetArchGun from '../../hooks/useGetArchGun'
import useGetSentinel from '../../hooks/useGetSentinel'
import useGetSentinelWeapon from '../../hooks/useGetSentinelWeapon'

import Loader from '../../util/Loader/Loader'

import data from '../../data/data.json'

import { Capitalize } from '../../util/Capitalize/Capitalize'

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
            {data.map((result, idx) => (
              <Fragment key={idx}>
                <Container key={idx}>
                  <SubTitle>{Capitalize(result.title)}</SubTitle>
                  <Cards>
                    {result.data.map((element, i) => (
                      <Fragment>
                        <Fragment key={i}>
                          {getWarframe.map((item, idx) =>
                            item.name.toLowerCase() === `${element}`.toLowerCase() ? (
                              <Fragment key={idx}>
                                <WarframeCard result={item} key={idx} idx={idx} />
                              </Fragment>
                            ) : (
                              <Fragment key={idx}></Fragment>
                            ),
                          )}
                        </Fragment>
                        <Fragment key={i}>
                          {getArchwing.map((item, idx) =>
                            item.name.toLowerCase() === `${element}`.toLowerCase() ? (
                              <Fragment key={idx}>
                                <ArchwingCard result={item} key={idx} idx={idx} />
                              </Fragment>
                            ) : (
                              <Fragment key={idx}></Fragment>
                            ),
                          )}
                        </Fragment>
                        <Fragment key={i}>
                          {getPrimary.map((item, idx) =>
                            item.name.toLowerCase() === `${element}`.toLowerCase() ? (
                              <Fragment key={idx}>
                                <PrimaryCard result={item} key={idx} idx={idx} />
                              </Fragment>
                            ) : (
                              <Fragment key={idx}></Fragment>
                            ),
                          )}
                        </Fragment>
                        <Fragment key={i}>
                          {getSecondary.map((item, idx) =>
                            item.name.toLowerCase() === `${element}`.toLowerCase() ? (
                              <Fragment key={idx}>
                                <SecondaryCard result={item} key={idx} idx={idx} />
                              </Fragment>
                            ) : (
                              <Fragment key={idx}></Fragment>
                            ),
                          )}
                        </Fragment>
                        <Fragment key={i}>
                          {getMelee.map((item, idx) =>
                            item.name.toLowerCase() === `${element}`.toLowerCase() ? (
                              <Fragment key={idx}>
                                <MeleeCard result={item} idx={idx} key={idx} />
                              </Fragment>
                            ) : (
                              <Fragment key={idx}></Fragment>
                            ),
                          )}
                        </Fragment>
                        <Fragment key={i}>
                          {getArchGun.map((item, idx) =>
                            item.name.toLowerCase() === `${element}`.toLowerCase() ? (
                              <Fragment key={idx}>
                                <ArchGunCard result={item} idx={idx} key={idx} />
                              </Fragment>
                            ) : (
                              <Fragment key={idx}></Fragment>
                            ),
                          )}
                        </Fragment>
                        <Fragment key={i}>
                          {getSentinel.map((item, idx) =>
                            item.name.toLowerCase() === `${element}`.toLowerCase() ? (
                              <Fragment key={idx}>
                                <SentinelCard result={item} idx={idx} key={idx} />
                              </Fragment>
                            ) : (
                              <Fragment key={idx}></Fragment>
                            ),
                          )}
                        </Fragment>
                        <Fragment key={i}>
                          {getSentinelWeapon.map((item, idx) =>
                            item.name.toLowerCase() === `${element}`.toLowerCase() ? (
                              <Fragment key={idx}>
                                <SentinelWeaponCard result={item} idx={idx} key={idx} />
                              </Fragment>
                            ) : (
                              <Fragment key={idx}></Fragment>
                            ),
                          )}
                        </Fragment>
                      </Fragment>
                    ))}
                  </Cards>
                </Container>
              </Fragment>
            ))}
          </section>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Home
