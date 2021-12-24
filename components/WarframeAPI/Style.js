import styled from 'styled-components'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export const TabListCounter = styled(TabList)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`
export const TabCounter = styled(Tab)`
  cursor: pointer;
  padding: 8px 16px;
  border: 0;
  border-bottom: 2px solid transparent;
  background: rgba(0, 0, 0, 0.4);
  color: rgba(221, 221, 221, 01);
  border-radius: 0.5rem;
  box-shadow: 0 4px 5px rgb(0 0 0 / 20%);
  user-select: none;

  &&.react-tabs__tab--selected {
    border-bottom: 2px solid rgb(213, 33, 40, 0.7);
    outline: none;
  }

  && :hover {
    border-bottom: 2px solid rgba(213, 0, 0, 1);
  }
`
