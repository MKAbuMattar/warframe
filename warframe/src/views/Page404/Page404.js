import React, { Component } from 'react'
import MeatDecorator from '../../utilities/MeatDecorator/MeatDecorator'
import MetaData from './Page404.json'
import { Main, Fof } from './Style'

export default class Page404 extends Component {
  render() {
    return (
      <>
        <MeatDecorator
          title={MetaData.title}
          description={MetaData.description}
        />
        <Main>
          <Fof>
            <h1>Page Not Found 404</h1>
            <br />
            <a href="/">back to home</a>
          </Fof>
        </Main>
      </>
    )
  }
}
