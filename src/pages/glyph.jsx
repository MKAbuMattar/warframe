import { Fragment } from 'react'

import MeatDecorator from '../util/MeatDecorator/MeatDecorator'
import { GlyphPage } from '../util/MeatDecoratorList/MeatDecoratorList'

import Glyph from '../view/Glyph/Glyph'

const glyph = () => {
  return (
    <Fragment>
      <MeatDecorator title={GlyphPage.title} description={GlyphPage.description} />
      <Glyph />
    </Fragment>
  )
}

export default glyph
