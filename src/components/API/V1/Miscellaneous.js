import { Fragment } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import CodeHighlight from '../../CodeHighlight/CodeHighlight'

import {
  MiscellaneousResponseSample200,
  MiscellaneousResponseSample400,
  MiscellaneousResponseSample404,
  MiscellaneousResponseSample500,
} from './ResponseSamples'

import {
  ResponseContainer,
  ResponseCodeContainer,
  ResponseBox,
  SubTitle,
  TabListResponseCounter,
  TabResponseCounter,
} from './Style'

const Miscellaneous = ({ icon }) => {
  return (
    <Fragment>
      <ResponseContainer>
        <ResponseBox>
          <SubTitle>{icon} Miscellaneous</SubTitle>
          <CodeHighlight
            key={'1'}
            code={`GET https://warframe-info.netlify.app/api/v1/miscellaneous`}
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
                  code={MiscellaneousResponseSample200}
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
                  code={MiscellaneousResponseSample400}
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
                  code={MiscellaneousResponseSample404}
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
                  code={MiscellaneousResponseSample500}
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

export default Miscellaneous
