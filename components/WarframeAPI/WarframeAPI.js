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

      <Tabs defaultIndex="1" key="1">
        <TabItem label="API V1" index="1" key="1">
          <V1 />
        </TabItem>
        <TabItem label="API V2" index="2" key="2">
          Dolor sit amet
        </TabItem>
      </Tabs>
    </Fragment>
  )
}

export default WarframeAPI
