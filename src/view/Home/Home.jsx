import {Fragment} from 'react';

import WarframeCard from '../../components/WarframeCard/WarframeCard';
import ArchwingCard from '../../components/ArchwingCard/ArchwingCard';
import PrimaryCard from '../../components/PrimaryCard/PrimaryCard';
import SecondaryCard from '../../components/SecondaryCard/SecondaryCard';
import MeleeCard from '../../components/MeleeCard/MeleeCard';
import ArchGunCard from '../../components/ArchGunCard/ArchGunCard';
import ArchMeleeCard from '../../components/ArchMeleeCard/ArchMeleeCard';
import SentinelCard from '../../components/SentinelCard/SentinelCard';
import SentinelWeaponCard from '../../components/SentinelWeaponCard/SentinelWeaponCard';

import useGetWarframe from '../../hooks/useGetWarframe';
import useGetArchwing from '../../hooks/useGetArchwing';
import useGetPrimary from '../../hooks/useGetPrimary';
import useGetSecondary from '../../hooks/useGetSecondary';
import useGetMelee from '../../hooks/useGetMelee';
import useGetArchGun from '../../hooks/useGetArchGun';
import useGetArchMelee from '../../hooks/useGetArchMelee';
import useGetSentinel from '../../hooks/useGetSentinel';
import useGetSentinelWeapon from '../../hooks/useGetSentinelWeapon';

import Loader from '../../util/Loader/Loader';

import data from '../../data/data.json';

import {Capitalize} from '../../util/Capitalize/Capitalize';
import {generateUniqueKey} from '../../util/generateUniqueKey/index';

import {Cards} from '../../style/Style';

import {Container, SubTitle} from './Style';

const Home = () => {
  const {getWarframe, getWarframeLoading, getWarframeError} = useGetWarframe();
  const {getArchwing, getArchwingLoading, getArchwingError} = useGetArchwing();
  const {getPrimary, getPrimaryLoading, getPrimaryError} = useGetPrimary();
  const {getSecondary, getSecondaryLoading, getSecondaryError} =
    useGetSecondary();
  const {getMelee, getMeleeLoading, getMeleeError} = useGetMelee();
  const {getArchGun, getArchGunLoading, getArchGunError} = useGetArchGun();
  const {getArchMelee, getArchMeleeLoading, getArchMeleeError} =
    useGetArchMelee();
  const {getSentinel, getSentinelLoading, getSentinelError} = useGetSentinel();
  const {getSentinelWeapon, getSentinelWeaponLoading, getSentinelWeaponError} =
    useGetSentinelWeapon();

  return (
    <Fragment>
      {getWarframeLoading &
      getArchwingLoading &
      getPrimaryLoading &
      getSecondaryLoading &
      getMeleeLoading &
      getArchGunLoading &
      getArchMeleeLoading &
      getSentinelLoading &
      getSentinelWeaponLoading ? (
        <Fragment>
          <Loader />
        </Fragment>
      ) : (
        <Fragment>
          <section className="container">
            {data.map((result, idx) => (
              <Fragment key={generateUniqueKey(idx)}>
                <Container key={generateUniqueKey(idx)}>
                  <SubTitle>{Capitalize(result.title)}</SubTitle>
                  <Cards>
                    {result.data.map((element, i) => (
                      <Fragment key={generateUniqueKey(i)}>
                        <Fragment key={generateUniqueKey(i)}>
                          {getWarframe.map((item, idx) =>
                            item.name.toLowerCase() ===
                            `${element}`.toLowerCase() ? (
                              <Fragment key={generateUniqueKey(idx)}>
                                <WarframeCard
                                  result={item}
                                  key={generateUniqueKey(idx)}
                                  idx={idx}
                                />
                              </Fragment>
                            ) : (
                              <Fragment key={generateUniqueKey(idx)}></Fragment>
                            ),
                          )}
                        </Fragment>
                        <Fragment key={generateUniqueKey(i)}>
                          {getArchwing.map((item, idx) =>
                            item.name.toLowerCase() ===
                            `${element}`.toLowerCase() ? (
                              <Fragment key={generateUniqueKey(idx)}>
                                <ArchwingCard
                                  result={item}
                                  key={generateUniqueKey(idx)}
                                  idx={idx}
                                />
                              </Fragment>
                            ) : (
                              <Fragment key={generateUniqueKey(idx)}></Fragment>
                            ),
                          )}
                        </Fragment>
                        <Fragment key={generateUniqueKey(i)}>
                          {getPrimary.map((item, idx) =>
                            item.name.toLowerCase() ===
                            `${element}`.toLowerCase() ? (
                              <Fragment key={generateUniqueKey(idx)}>
                                <PrimaryCard
                                  result={item}
                                  key={generateUniqueKey(idx)}
                                  idx={idx}
                                />
                              </Fragment>
                            ) : (
                              <Fragment key={generateUniqueKey(idx)}></Fragment>
                            ),
                          )}
                        </Fragment>
                        <Fragment key={generateUniqueKey(i)}>
                          {getSecondary.map((item, idx) =>
                            item.name.toLowerCase() ===
                            `${element}`.toLowerCase() ? (
                              <Fragment key={generateUniqueKey(idx)}>
                                <SecondaryCard
                                  result={item}
                                  key={generateUniqueKey(idx)}
                                  idx={idx}
                                />
                              </Fragment>
                            ) : (
                              <Fragment key={generateUniqueKey(idx)}></Fragment>
                            ),
                          )}
                        </Fragment>
                        <Fragment key={generateUniqueKey(i)}>
                          {getMelee.map((item, idx) =>
                            item.name.toLowerCase() ===
                            `${element}`.toLowerCase() ? (
                              <Fragment key={generateUniqueKey(idx)}>
                                <MeleeCard
                                  result={item}
                                  idx={idx}
                                  key={generateUniqueKey(idx)}
                                />
                              </Fragment>
                            ) : (
                              <Fragment key={generateUniqueKey(idx)}></Fragment>
                            ),
                          )}
                        </Fragment>
                        <Fragment key={generateUniqueKey(i)}>
                          {getArchGun.map((item, idx) =>
                            item.name.toLowerCase() ===
                            `${element}`.toLowerCase() ? (
                              <Fragment key={generateUniqueKey(idx)}>
                                <ArchGunCard
                                  result={item}
                                  idx={idx}
                                  key={generateUniqueKey(idx)}
                                />
                              </Fragment>
                            ) : (
                              <Fragment key={generateUniqueKey(idx)}></Fragment>
                            ),
                          )}
                        </Fragment>
                        <Fragment key={generateUniqueKey(i)}>
                          {getArchMelee.map((item, idx) =>
                            item.name.toLowerCase() ===
                            `${element}`.toLowerCase() ? (
                              <Fragment key={generateUniqueKey(idx)}>
                                <ArchMeleeCard
                                  result={item}
                                  idx={idx}
                                  key={generateUniqueKey(idx)}
                                />
                              </Fragment>
                            ) : (
                              <Fragment key={generateUniqueKey(idx)}></Fragment>
                            ),
                          )}
                        </Fragment>
                        <Fragment key={generateUniqueKey(i)}>
                          {getSentinel.map((item, idx) =>
                            item.name.toLowerCase() ===
                            `${element}`.toLowerCase() ? (
                              <Fragment key={generateUniqueKey(idx)}>
                                <SentinelCard
                                  result={item}
                                  idx={idx}
                                  key={generateUniqueKey(idx)}
                                />
                              </Fragment>
                            ) : (
                              <Fragment key={generateUniqueKey(idx)}></Fragment>
                            ),
                          )}
                        </Fragment>
                        <Fragment key={generateUniqueKey(i)}>
                          {getSentinelWeapon.map((item, idx) =>
                            item.name.toLowerCase() ===
                            `${element}`.toLowerCase() ? (
                              <Fragment key={generateUniqueKey(idx)}>
                                <SentinelWeaponCard
                                  result={item}
                                  idx={idx}
                                  key={generateUniqueKey(idx)}
                                />
                              </Fragment>
                            ) : (
                              <Fragment key={generateUniqueKey(idx)}></Fragment>
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
  );
};

export default Home;
