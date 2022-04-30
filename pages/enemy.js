import { Fragment } from 'react'

import MeatDecorator from '../util/MeatDecorator/MeatDecorator'
import { EnemyPage } from '../util/MeatDecoratorList/MeatDecoratorList'

import Enemy from '../view/Enemy/Enemy'

const enemy = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={EnemyPage.title}
        description={EnemyPage.description}
      />
      <Enemy />
    </Fragment>
  )
}

export default enemy
