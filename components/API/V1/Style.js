import styled from 'styled-components'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  background: rgba(0, 0, 0, 0.4);
  padding: 1rem;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`

export const ContainerMenuSticky = styled.div`
  position: sticky;
  top: 3.7rem;
`

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1rem;
`

export const ResponseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;

  scroll-margin-top: 4rem;
`

export const ResponseCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const ResponseBox = styled(ContainerBox)`
  gap: 1rem;
`

export const SubTitle = styled.p`
  font-size: 2.7rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;
`
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 8px 16px;
  border: 0;
  border: 2px solid transparent;
  background: rgba(0, 0, 0, 0.4);
  color: rgba(221, 221, 221, 01);
  border-radius: 0.5rem;
  box-shadow: 0 4px 5px rgb(0 0 0 / 20%);
  width: 6rem;
  height: 6rem;
  flex-direction: column;

  &&.react-tabs__tab--selected {
    border: 2px solid rgb(213, 33, 40, 0.7);
    outline: none;
  }

  && :hover {
    border: 2px solid rgba(213, 0, 0, 1);
  }
`

export const TabPanelCounter = styled(TabPanel)`
  background: rgba(0, 0, 0, 0.4);
  color: rgba(221, 221, 221, 01);
  box-shadow: 0 4px 5px rgb(0 0 0 / 20%);
  border-radius: 0.5rem;
`
export const TabListResponseCounter = styled(TabListCounter)`
  justify-content: flex-start;
`
export const TabResponseCounter = styled(Tab)`
  cursor: pointer;
  padding: 8px 16px;
  border: 0;
  border-bottom: 2px solid transparent;
  background: rgb(32 33 40);
  color: rgba(221, 221, 221, 01);
  border-radius: 0.5rem;
  font-weight: bold;
  box-shadow: 0 4px 5px rgb(0 0 0 / 20%);
  user-select: none;
  outline: none;

  &&.react-tabs__tab--selected {
    background: rgba(221, 221, 221, 01);
    outline: none;
  }

  && :hover {
    background: rgba(221, 221, 221, 01);
    outline: none;
  }

  &&.green {
    color: rgb(29, 129, 39) !important;
  }

  &&.red {
    color: rgba(213, 33, 40, 0.7) !important;
  }
`
