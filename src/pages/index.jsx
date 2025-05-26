import {Fragment} from 'react';
import PageSEO from '../components/PageTemplate/PageSEO';
import {HomePageMeatDecorator} from '../util/MeatDecoratorList/MeatDecoratorList';

import {
  WarframeCard,
  ArchwingCard,
  PrimaryCard,
  SecondaryCard,
  MeleeCard,
  ArchGunCard,
  ArchMeleeCard,
  SentinelCard,
  SentinelWeaponCard,
} from '../components/CardFactory';

import {
  useGetWarframe,
  useGetArchwing,
  useGetPrimary,
  useGetSecondary,
  useGetMelee,
  useGetArchGun,
  useGetArchMelee,
  useGetSentinel,
  useGetSentinelWeapon,
} from '../hooks';

import Loader from '../util/Loader/Loader';
import data from '../data/data.json';
import {Capitalize} from '../util/Capitalize/Capitalize';
import {generateUniqueKey} from '../util/generateUniqueKey/index';
import {Cards} from '../style/Style';

// Import Home styles
import {Container, SubTitle} from '../style/Style';

const HomePage = () => {
  const {getWarframe, getWarframeLoading} = useGetWarframe();
  const {getArchwing, getArchwingLoading} = useGetArchwing();
  const {getPrimary, getPrimaryLoading} = useGetPrimary();
  const {getSecondary, getSecondaryLoading} = useGetSecondary();
  const {getMelee, getMeleeLoading} = useGetMelee();
  const {getArchGun, getArchGunLoading} = useGetArchGun();
  const {getArchMelee, getArchMeleeLoading} = useGetArchMelee();
  const {getSentinel, getSentinelLoading} = useGetSentinel();
  const {getSentinelWeapon, getSentinelWeaponLoading} = useGetSentinelWeapon();

  const isLoading =
    getWarframeLoading ||
    getArchwingLoading ||
    getPrimaryLoading ||
    getSecondaryLoading ||
    getMeleeLoading ||
    getArchGunLoading ||
    getArchMeleeLoading ||
    getSentinelLoading ||
    getSentinelWeaponLoading;

  const renderEntityCards = (element, entityData, CardComponent) => {
    return entityData
      ?.filter((item) => item.name.toLowerCase() === element.toLowerCase())
      .map((item, idx) => (
        <CardComponent result={item} key={generateUniqueKey(idx)} idx={idx} />
      ));
  };

  return (
    <PageSEO
      title={HomePageMeatDecorator.title}
      description={HomePageMeatDecorator.description}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <section className="container">
          {data.map((result, idx) => (
            <Container key={generateUniqueKey(idx)}>
              <SubTitle>{Capitalize(result.title)}</SubTitle>
              <Cards>
                {result.data.map((element, i) => (
                  <Fragment key={generateUniqueKey(i)}>
                    {renderEntityCards(element, getWarframe, WarframeCard)}
                    {renderEntityCards(element, getArchwing, ArchwingCard)}
                    {renderEntityCards(element, getPrimary, PrimaryCard)}
                    {renderEntityCards(element, getSecondary, SecondaryCard)}
                    {renderEntityCards(element, getMelee, MeleeCard)}
                    {renderEntityCards(element, getArchGun, ArchGunCard)}
                    {renderEntityCards(element, getArchMelee, ArchMeleeCard)}
                    {renderEntityCards(element, getSentinel, SentinelCard)}
                    {renderEntityCards(
                      element,
                      getSentinelWeapon,
                      SentinelWeaponCard,
                    )}
                  </Fragment>
                ))}
              </Cards>
            </Container>
          ))}
        </section>
      )}
    </PageSEO>
  );
};

export default HomePage;
