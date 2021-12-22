import { Fragment } from 'react'

import MeatDecorator from '../util/MeatDecorator/MeatDecorator'
import { GearPage } from '../util/MeatDecoratorList/MeatDecoratorList'

import Gear from '../components/Gear/Gear'

const gear = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={GearPage.title}
        description={GearPage.description}
      />
      <Gear />
    </Fragment>
  )
}

export default gear
