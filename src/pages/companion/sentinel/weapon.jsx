import {Fragment} from 'react';

import MeatDecorator from '../../../util/MeatDecorator/MeatDecorator';
import {SentinelWeaponPage} from '../../../util/MeatDecoratorList/MeatDecoratorList';

import SentinelWeapon from '../../../view/SentinelWeapon/SentinelWeapon';

const sentinelWeapon = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={SentinelWeaponPage.title}
        description={SentinelWeaponPage.description}
      />
      <SentinelWeapon />
    </Fragment>
  );
};

export default sentinelWeapon;
