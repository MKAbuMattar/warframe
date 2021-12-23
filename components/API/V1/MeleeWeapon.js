import { Fragment } from 'react'
import CodeHighlight from '../../CodeHighlight/CodeHighlight'

import TabItem from '../../TabItem/TabItem'
import ResponseTabs from '../../ResponseTabs/ResponseTabs'

import {
  MeleeWeaponResponseSample200,
  MeleeWeaponResponseSample400,
  MeleeWeaponResponseSample404,
  MeleeWeaponResponseSample500,
} from './ResponseSamples'

import {
  ResponseContainer,
  ResponseCodeContainer,
  ResponseBox,
  SubTitle,
} from './Style'

const MeleeWeapon = ({ icon }) => {
  return (
    <Fragment>
      <ResponseContainer>
        <ResponseBox>
          <SubTitle>{icon} Melee Weapons</SubTitle>
          <CodeHighlight
            key={'1'}
            code={`GET https://warframe-info.netlify.app/api/v1/weapons/melee`}
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
                  code={MeleeWeaponResponseSample200}
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
                  code={MeleeWeaponResponseSample400}
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
                  code={MeleeWeaponResponseSample404}
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
                  code={MeleeWeaponResponseSample500}
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

export default MeleeWeapon
