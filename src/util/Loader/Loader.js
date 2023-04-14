import { Fragment } from 'react'

import { LoaderWrapper, LoaderSides, LoaderCenter } from './Style'

const Loader = () => {
  return (
    <Fragment>
      <LoaderWrapper>
        <LoaderSides />
        <LoaderCenter />
      </LoaderWrapper>
    </Fragment>
  )
}

export default Loader
