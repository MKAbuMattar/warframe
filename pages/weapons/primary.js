import { Fragment } from 'react'

import MeatDecorator from '../../util/MeatDecorator/MeatDecorator'
import { PrimaryWeaponsPage } from '../../util/MeatDecoratorList/MeatDecoratorList'

import Primary from '../../components/Primary/Primary'

const primary = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={PrimaryWeaponsPage.title}
        description={PrimaryWeaponsPage.description}
      />
      <Primary />
    </Fragment>
  )
}

export default primary
