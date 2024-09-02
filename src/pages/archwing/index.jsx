import {Fragment} from 'react';

import MeatDecorator from '../../util/MeatDecorator/MeatDecorator';
import {ArchwingPage} from '../../util/MeatDecoratorList/MeatDecoratorList';

import Archwing from '../../view/Archwing/Archwing';

const archwing = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={ArchwingPage.title}
        description={ArchwingPage.description}
      />
      <Archwing />
    </Fragment>
  );
};

export default archwing;
