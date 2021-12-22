import { Fragment } from 'react'

import MeatDecorator from '../../util/MeatDecorator/MeatDecorator'
import { SecondaryWeaponsPage } from '../../util/MeatDecoratorList/MeatDecoratorList'

import Secondary from '../../components/Secondary/Secondary'

const secondary = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={SecondaryWeaponsPage.title}
        description={SecondaryWeaponsPage.description}
      />
      <Secondary />
    </Fragment>
  )
}

export default secondary
