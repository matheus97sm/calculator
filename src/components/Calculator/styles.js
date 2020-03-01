import styled, { keyframes } from 'styled-components';

const blue = '#567ED9';
const darkBlue = '#031339';
const grey = '#707070';
const lightGrey = '#ABABAB';
const pink = '#E84A7F';

export const Container = styled.div`
  width: 100%;
  padding: 32px 16px;
  margin-top: 25vw;
  background-color: ${props => (props.darkMode ? darkBlue : '#fff')};
  border-radius: 32px;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 1050px) {
    max-width: 360px;
    margin-top: 0;
  }
`;

export const Result = styled.div`
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid ${lightGrey};

  small {
    display: block;
    color: ${lightGrey};
    font-size: 16px;
    text-align: right;
  }

  span {
    display: block;
    color: ${props => (props.darkMode ? '#fff' : grey)};
    font-size: 52px;
    text-align: right;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      height: 4px;
      display: ${props => (String(props.total).length > 12 ? 'block' : 'none')};
      border-radius: 3px;
    }
    &::-webkit-scrollbar-button,
    &::-webkit-scrollbar-corner,
    &::-webkit-resizer,
    &::-webkit-scrollbar-track-piece {
      display: none;
    }
    &::-webkit-scrollbar-track {
      background-color: #eee;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
    }
  }
`;

const buttonAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);

  }

  30% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: scale(150);
  }
`;

export const CalculatorKeyboard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  button {
    position: relative;
    padding: 16px 8px;
    background-color: transparent;
    border: none;
    color: ${props => (props.darkMode ? '#fff' : grey)};
    font-size: 28px;
    overflow: hidden;
    z-index: 1;

    &.c {
      color: ${pink};
      font-weight: bold;
    }

    &.zero {
      grid-column: 1 / 3;
    }

    svg {
      color: ${blue};
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 1px;
      height: 1px;
      transform-origin: center;
      border-radius: 50%;
      background-color: #f7f7f7;
      z-index: -1;
    }

    &.animate::before {
      animation: 0.2s ${buttonAnimation} ease-in-out;
    }
  }
`;
