import {Fragment} from 'react';

import MeatDecorator from '../../../util/MeatDecorator/MeatDecorator';
import {SentinelPage} from '../../../util/MeatDecoratorList/MeatDecoratorList';

import Sentinel from '../../../view/Sentinel/Sentinel';

const sentinel = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={SentinelPage.title}
        description={SentinelPage.description}
      />
      <Sentinel />
    </Fragment>
  );
};

export default sentinel;
