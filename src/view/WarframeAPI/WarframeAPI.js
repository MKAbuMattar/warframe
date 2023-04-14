import { Fragment } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import V1 from '../../components/API/V1'

import { PageCounter } from '../../style/Style'

import { TabListCounter, TabCounter } from './Style'

const WarframeAPI = () => {
  return (
    <Fragment>
      <PageCounter>Warframe API</PageCounter>

      <Tabs className={'container'}>
        <TabListCounter>
          <TabCounter>API V1</TabCounter>
          {/* <TabCounter>API V2</TabCounter> */}
        </TabListCounter>

        <TabPanel>
          <V1 />
        </TabPanel>
        {/* <TabPanel>
          <p>work in progress</p>
        </TabPanel> */}
      </Tabs>
    </Fragment>
  )
}

export default WarframeAPI
