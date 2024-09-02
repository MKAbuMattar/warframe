import {Fragment} from 'react';

import MeatDecorator from '../../../util/MeatDecorator/MeatDecorator';
import {ArchMeleePage} from '../../../util/MeatDecoratorList/MeatDecoratorList';

import ArchMelee from '../../../view/ArchMelee/ArchMelee';

const archMelee = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={ArchMeleePage.title}
        description={ArchMeleePage.description}
      />
      <ArchMelee />
    </Fragment>
  );
};

export default archMelee;
