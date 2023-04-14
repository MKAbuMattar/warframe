import { Fragment } from 'react'

import WarframeAPI from '../../view/WarframeAPI/WarframeAPI'

import MeatDecorator from '../../util/MeatDecorator/MeatDecorator'
import { WarframeInfoAPI } from '../../util/MeatDecoratorList/MeatDecoratorList'

const index = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={WarframeInfoAPI.title}
        description={WarframeInfoAPI.description}
      />
      <WarframeAPI />
    </Fragment>
  )
}

export default index
