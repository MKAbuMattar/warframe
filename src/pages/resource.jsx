import { Fragment } from 'react'

import MeatDecorator from '../util/MeatDecorator/MeatDecorator'
import { ResourcePage } from '../util/MeatDecoratorList/MeatDecoratorList'

import Resource from '../view/Resource/Resource'

const resource = () => {
  return (
    <Fragment>
      <MeatDecorator title={ResourcePage.title} description={ResourcePage.description} />
      <Resource />
    </Fragment>
  )
}

export default resource
