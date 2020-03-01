import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    overflow-x: hidden;

    &.dark {
      background-color: #0A1B43;
    }
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default Global;
