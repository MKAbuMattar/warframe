import { Fragment } from 'react'

import MeatDecorator from '../../util/MeatDecorator/MeatDecorator'
import { ArcanePage } from '../../util/MeatDecoratorList/MeatDecoratorList'

import Arcane from '../../components/Arcane/Arcane'

const arcane = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={ArcanePage.title}
        description={ArcanePage.description}
      />
      <Arcane />
    </Fragment>
  )
}

export default arcane
