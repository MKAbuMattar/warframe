import {Fragment} from 'react';

import MeatDecorator from '../../util/MeatDecorator/MeatDecorator';
import {MeleeWeaponsPage} from '../../util/MeatDecoratorList/MeatDecoratorList';

import Melee from '../../view/Melee/Melee';

const melee = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={MeleeWeaponsPage.title}
        description={MeleeWeaponsPage.description}
      />
      <Melee />
    </Fragment>
  );
};

export default melee;
