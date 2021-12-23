import { Fragment } from 'react'
import CodeHighlight from '../../CodeHighlight/CodeHighlight'

import TabItem from '../../TabItem/TabItem'
import ResponseTabs from '../../ResponseTabs/ResponseTabs'

import {
  ModResponseSample200,
  ModResponseSample400,
  ModResponseSample404,
  ModResponseSample500,
} from './ResponseSamples'

import {
  ResponseContainer,
  ResponseCodeContainer,
  ResponseBox,
  SubTitle,
} from './Style'

const Mod = ({ icon }) => {
  return (
    <Fragment>
      <ResponseContainer>
        <ResponseBox>
          <SubTitle>{icon} Mod</SubTitle>
          <CodeHighlight
            key={'1'}
            code={`GET https://warframe-info.netlify.app/api/v1/warframe/mod`}
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
                  code={ModResponseSample200}
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
                  code={ModResponseSample400}
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
                  code={ModResponseSample404}
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
                  code={ModResponseSample500}
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

export default Mod
