import { Fragment } from 'react'

import MeatDecorator from '../util/MeatDecorator/MeatDecorator'
import { HomePage } from '../util/MeatDecoratorList/MeatDecoratorList'

import Home from '../components/Home/Home'

const index = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={HomePage.title}
        description={HomePage.description}
      />
      <Home />
    </Fragment>
  )
}

export default index
