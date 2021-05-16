import styled from 'styled-components'

export const LoaderWrapper = styled.div`
  background: rgb(255,255,255);
	box-sizing: content-box;
	box-shadow: 0 0 0 96px rgb(33,33,33) inset;
	width: 200px;
	height: 200px;
	overflow: hidden;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%) rotate(45deg);
`

export const LoaderSides = styled.span`
  border: 6px solid rgb(255,255,255);
	display: inline-block;
	position: absolute;
  top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	width: 52px;
	height: 52px;
	animation-name: pulser;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
	animation-timing-function: linear;

  &::before, &::after{
    background: rgb(33,33,33);
    content: ' ';
    width: 80px;
    height: 200px;
    display: inline-block;
    position: absolute;
    transform: rotate(45deg);
  }

  &::before{
    bottom: -110px;
    left: 28px;
  }
  &::after{
    top: -110px;
    right: 28px;
  }

  @keyframes pulser {
    0% {
      width: 52px;	height: 52px;
    }
    10% {
      width: 52px;	height: 52px;
    }
    20% {
      width: 72px;	height: 72px;
    }
    35% {
      width: 72px;	height: 72px;
    }
    45% {
      width: 52px;	height: 52px;
    }
    60% {
      width: 52px;	height: 52px;
    }
    75% {
      width: 72px;	height: 72px;
    }
    85% {
      width: 72px;	height: 72px;
    }
    100% {
      width: 52px;	height: 52px;
    }
  }
`
export const LoaderCenter = styled.span`
  border: 6px solid rgb(255,255,255);
	display: inline-block;
	position: absolute;
  top: 41%;
	left: 41%;
	transform: translate(-50%,-50%);
	width: 24px;
	height: 24px;
	animation-name: spinner;
  animation-duration: 3s;
  animation-iteration-count: infinite;
	animation-timing-function: linear;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(90deg);
    }
    35% {
      transform: rotate(90deg);
    }
    45% {
      transform: rotate(180deg);
    }
    60% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    85% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
