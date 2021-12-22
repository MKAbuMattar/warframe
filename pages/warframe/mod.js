import { Fragment } from 'react'

import MeatDecorator from '../../util/MeatDecorator/MeatDecorator'
import { ModPage } from '../../util/MeatDecoratorList/MeatDecoratorList'

import Mod from '../../components/Mod/Mod'

const mod = () => {
  return (
    <Fragment>
      <MeatDecorator title={ModPage.title} description={ModPage.description} />
      <Mod />
    </Fragment>
  )
}

export default mod
