import {Fragment} from 'react';

import MeatDecorator from '../../util/MeatDecorator/MeatDecorator';
import {NecramechPage} from '../../util/MeatDecoratorList/MeatDecoratorList';

import Necramech from '../../view/Necramech/Necramech';

const necrameche = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={NecramechPage.title}
        description={NecramechPage.description}
      />
      <Necramech />
    </Fragment>
  );
};

export default necrameche;
