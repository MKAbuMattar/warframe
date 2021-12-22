import { Fragment } from 'react'

import MeatDecorator from '../../../util/MeatDecorator/MeatDecorator'
import { ArchGunPage } from '../../../util/MeatDecoratorList/MeatDecoratorList'

import ArchGun from '../../../components/ArchGun/ArchGun'

const archGun = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={ArchGunPage.title}
        description={ArchGunPage.description}
      />
      <ArchGun />
    </Fragment>
  )
}

export default archGun
