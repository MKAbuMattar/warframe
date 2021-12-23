import { Fragment } from 'react'

import Navbar from '../Navbar/Navbar'

import Background from '../../util/Background/Background'

import TabItem from '../TabItem/TabItem'
import Tabs from '../Tabs/Tabs'

import V1 from '../API/V1/index'

import { PageCounter } from '../../style/Style'

const WarframeAPI = () => {
  return (
    <Fragment>
      <Navbar />
      <Background />
      <PageCounter>Warframe API</PageCounter>

      <V1 />
    </Fragment>
  )
}

export default WarframeAPI
