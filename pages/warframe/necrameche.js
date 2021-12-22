import { Fragment } from 'react'

import MeatDecorator from '../../util/MeatDecorator/MeatDecorator'
import { NecramechPage } from '../../util/MeatDecoratorList/MeatDecoratorList'

import Necrameche from '../../components/Necrameche/Necrameche'

const necrameche = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={NecramechPage.title}
        description={NecramechPage.description}
      />
      <Necrameche />
    </Fragment>
  )
}

export default necrameche
