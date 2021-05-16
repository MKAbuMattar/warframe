import React, { Component } from 'react'
import { LoaderWrapper, LoaderSides, LoaderCenter } from './Style'

export default class Loader extends Component {
  render() {
    return (
      <>
        <LoaderWrapper>
          <LoaderSides />
          <LoaderCenter />
        </LoaderWrapper>
      </>
    )
  }
}
