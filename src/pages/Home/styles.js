import styled from 'styled-components';

const blue = '#567ED9';
const lightBlue = '#A9C1F8';
const grey = '#707070';
const lightGrey = '#BFBFBF';

export const Container = styled.div`
  width: 90%;
  max-width: 1050px;
  margin: 0 auto;
  padding: 32px 0 16px;

  svg {
    color: ${props => (props.darkMode ? lightBlue : blue)};
    font-size: 20px;
    cursor: pointer;
  }

  @media screen and (min-width: 1050px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      width: 40%;
    }
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  margin: 32px 0;

  h1 {
    font-size: 11vw;
    color: ${props => (props.darkMode ? lightBlue : blue)};
  }

  p,
  a {
    max-width: 90%;
    margin-top: 1vw;
    color: ${props => (props.darkMode ? lightGrey : grey)};
    font-size: 4.5vw;
    line-height: 6.5vw;
  }

  @media screen and (min-width: 1050px) {
    h1 {
      font-size: 48px;
    }

    p,
    a {
      max-width: 70%;
      margin-top: 8px;
      font-size: 18px;
      line-height: 26px;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  .circle,
  .circleDarker {
    width: 90vw;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate3d(-70%, 0, 0);
    z-index: -1;
  }

  .illustration {
    width: 80vw;
    z-index: 9;
    transform: translate3d(15%, 0, 0);
  }

  @media screen and (min-width: 1050px) {
    .circle,
    .circleDarker {
      width: 90%;
    }

    .illustration {
      width: 80%;
    }
  }
`;

export const Footer = styled.footer`
  width: 90%;
  margin: 32px auto 16px;

  p,
  a {
    color: ${props => (props.darkMode ? lightGrey : grey)};
    font-size: 12px;
    text-align: center;
    vertical-align: middle;
  }
`;
