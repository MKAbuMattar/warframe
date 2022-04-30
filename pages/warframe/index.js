import { Fragment } from 'react'

import MeatDecorator from '../../util/MeatDecorator/MeatDecorator'
import { WarframePage } from '../../util/MeatDecoratorList/MeatDecoratorList'

import Warframe from '../../view/Warframe/Warframe'

const index = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={WarframePage.title}
        description={WarframePage.description}
      />
      <Warframe />
    </Fragment>
  )
}

export default index
