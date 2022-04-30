import { Fragment } from 'react'

import MeatDecorator from '../../util/MeatDecorator/MeatDecorator'
import { CompanionPage } from '../../util/MeatDecoratorList/MeatDecoratorList'

import Pet from '../../view/Pet/Pet'

const pet = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={CompanionPage.title}
        description={CompanionPage.description}
      />
      <Pet />
    </Fragment>
  )
}

export default pet
