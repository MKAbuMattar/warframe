import { Fragment } from 'react'

import MeatDecorator from '../util/MeatDecorator/MeatDecorator'
import { QuestPage } from '../util/MeatDecoratorList/MeatDecoratorList'

import Quest from '../components/Quest/Quest'

const quest = () => {
  return (
    <Fragment>
      <MeatDecorator
        title={QuestPage.title}
        description={QuestPage.description}
      />
      <Quest />
    </Fragment>
  )
}

export default quest
