import { Fragment } from 'react'
import CodeHighlight from '../../CodeHighlight/CodeHighlight'

import TabItem from '../../TabItem/TabItem'
import ResponseTabs from '../../ResponseTabs/ResponseTabs'

import {
  PrimaryWeaponResponseSample200,
  PrimaryWeaponResponseSample400,
  PrimaryWeaponResponseSample404,
  PrimaryWeaponResponseSample500,
} from './ResponseSamples'

import {
  ResponseContainer,
  ResponseCodeContainer,
  ResponseBox,
  SubTitle,
} from './Style'

const PrimaryWeapon = ({ icon }) => {
  return (
    <Fragment>
      <ResponseContainer>
        <ResponseBox>
          <SubTitle>{icon} Primary Weapons</SubTitle>
          <CodeHighlight
            key={'1'}
            code={`GET https://warframe-info.netlify.app/api/v1/weapons/primary`}
            language={'language-http'}
          />
        </ResponseBox>
        <ResponseBox>
          <p>Response sample</p>

          <ResponseTabs defaultIndex="1" key="1">
            <TabItem label="200" labelColor="green" index="1" key="1">
              <ResponseCodeContainer>
                <CodeHighlight
                  key={'0'}
                  code={'application/json'}
                  language={'language-plaintext'}
                />
                <CodeHighlight
                  key={'1'}
                  code={PrimaryWeaponResponseSample200}
                  language={'language-json'}
                />
              </ResponseCodeContainer>
            </TabItem>
            <TabItem label="400" labelColor="red" index="2" key="2">
              <ResponseCodeContainer>
                <CodeHighlight
                  key={'0'}
                  code={'application/json'}
                  language={'language-plaintext'}
                />
                <CodeHighlight
                  key={'1'}
                  code={PrimaryWeaponResponseSample400}
                  language={'language-json'}
                />
              </ResponseCodeContainer>
            </TabItem>
            <TabItem label="404" labelColor="red" index="3" key="3">
              <ResponseCodeContainer>
                <CodeHighlight
                  key={'0'}
                  code={'application/json'}
                  language={'language-plaintext'}
                />
                <CodeHighlight
                  key={'1'}
                  code={PrimaryWeaponResponseSample404}
                  language={'language-json'}
                />
              </ResponseCodeContainer>
            </TabItem>
            <TabItem label="500" labelColor="red" index="4" key="4">
              <ResponseCodeContainer>
                <CodeHighlight
                  key={'0'}
                  code={'application/json'}
                  language={'language-plaintext'}
                />
                <CodeHighlight
                  key={'1'}
                  code={PrimaryWeaponResponseSample500}
                  language={'language-json'}
                />
              </ResponseCodeContainer>
            </TabItem>
          </ResponseTabs>
        </ResponseBox>
      </ResponseContainer>
    </Fragment>
  )
}

export default PrimaryWeapon
