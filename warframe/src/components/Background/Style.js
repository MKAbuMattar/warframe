import styled from 'styled-components'

export const PopupWrapper = styled.div`
  background-color: rgb(33, 33, 33);
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  display: flex;
  position: fixed;
  z-index: -1;
`

export const Icon = styled.svg`
  height: 100vh;
  width: auto;
  position: fixed;
  float: left;
  left: 0;
  z-index: -1;
  && path{
    stroke: rgba(213, 0, 0, 1.0);
    opacity: .2;
  }
  && .wflogoPath1, .wflogoPath2, .wflogoPath3, .wflogoPath4, .wflogoPath5{
    stroke-dasharray: 200;
    animation: dash 1s linear infinite;
    @keyframes dash {
      to {
        stroke-dashoffset: 400;
      }
    }
  }
`