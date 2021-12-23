import { Fragment } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import CodeHighlight from '../../CodeHighlight/CodeHighlight'

import {
  SentinelWeaponResponseSample200,
  SentinelWeaponResponseSample400,
  SentinelWeaponResponseSample404,
  SentinelWeaponResponseSample500,
} from './ResponseSamples'

import {
  ResponseContainer,
  ResponseCodeContainer,
  ResponseBox,
  SubTitle,
  TabListResponseCounter,
  TabResponseCounter,
} from './Style'

const SentinelWeapon = ({ icon }) => {
  return (
    <Fragment>
      <ResponseContainer>
        <ResponseBox>
          <SubTitle>{icon} Sentinel Weapon</SubTitle>
          <CodeHighlight
            key={'1'}
            code={`GET https://warframe-info.netlify.app/api/v1/companion/sentinel/weapon`}
            language={'language-http'}
          />
        </ResponseBox>
        <ResponseBox>
          <p>Response sample</p>

          <Tabs>
            <TabListResponseCounter>
              <TabResponseCounter className={'green'}>200</TabResponseCounter>
              <TabResponseCounter className={'red'}>400</TabResponseCounter>
              <TabResponseCounter className={'red'}>404</TabResponseCounter>
              <TabResponseCounter className={'red'}>500</TabResponseCounter>
            </TabListResponseCounter>

            <TabPanel>
              <ResponseCodeContainer>
                <CodeHighlight
                  key={'0'}
                  code={'application/json'}
                  language={'language-plaintext'}
                />
                <CodeHighlight
                  key={'1'}
                  code={SentinelWeaponResponseSample200}
                  language={'language-json'}
                />
              </ResponseCodeContainer>
            </TabPanel>
            <TabPanel>
              <ResponseCodeContainer>
                <CodeHighlight
                  key={'0'}
                  code={'application/json'}
                  language={'language-plaintext'}
                />
                <CodeHighlight
                  key={'1'}
                  code={SentinelWeaponResponseSample400}
                  language={'language-json'}
                />
              </ResponseCodeContainer>
            </TabPanel>
            <TabPanel>
              <ResponseCodeContainer>
                <CodeHighlight
                  key={'0'}
                  code={'application/json'}
                  language={'language-plaintext'}
                />
                <CodeHighlight
                  key={'1'}
                  code={SentinelWeaponResponseSample404}
                  language={'language-json'}
                />
              </ResponseCodeContainer>
            </TabPanel>
            <TabPanel>
              <ResponseCodeContainer>
                <CodeHighlight
                  key={'0'}
                  code={'application/json'}
                  language={'language-plaintext'}
                />
                <CodeHighlight
                  key={'1'}
                  code={SentinelWeaponResponseSample500}
                  language={'language-json'}
                />
              </ResponseCodeContainer>
            </TabPanel>
          </Tabs>
        </ResponseBox>
      </ResponseContainer>
    </Fragment>
  )
}

export default SentinelWeapon
