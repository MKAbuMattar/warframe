import { Fragment } from 'react'
import CodeHighlight from '../../CodeHighlight/CodeHighlight'

import TabItem from '../../TabItem/TabItem'
import ResponseTabs from '../../ResponseTabs/ResponseTabs'

import {
  WarframeResponseSample200,
  WarframeResponseSample400,
  WarframeResponseSample404,
  WarframeResponseSample500,
} from './ResponseSamples'

import {
  ResponseContainer,
  ResponseCodeContainer,
  ResponseBox,
  SubTitle,
} from './Style'

const Warframe = ({ icon }) => {
  return (
    <Fragment>
      <ResponseContainer>
        <ResponseBox>
          <SubTitle>{icon} Warframe</SubTitle>
          <CodeHighlight
            key={'1'}
            code={`GET https://warframe-info.netlify.app/api/v1/warframe`}
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
                  code={WarframeResponseSample200}
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
                  code={WarframeResponseSample400}
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
                  code={WarframeResponseSample404}
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
                  code={WarframeResponseSample500}
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

export default Warframe
