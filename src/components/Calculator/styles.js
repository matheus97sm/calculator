import styled from 'styled-components';

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
  }
`;

export const CalculatorKeyboard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  button {
    padding: 16px 8px;
    background-color: transparent;
    border: none;
    color: ${props => (props.darkMode ? '#fff' : grey)};
    font-size: 28px;

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
  }
`;
