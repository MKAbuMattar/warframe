import { Fragment } from 'react'

import MeatDecorator from '../util/MeatDecorator/MeatDecorator'
import { MiscellaneousPage } from '../util/MeatDecoratorList/MeatDecoratorList'

import Miscellaneous from '../components/Miscellaneous/Miscellaneous'

const index = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={MiscellaneousPage.title}
        description={MiscellaneousPage.description}
      />
      <Miscellaneous />
    </Fragment>
  )
}

export default index
