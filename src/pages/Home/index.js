import React, { Component } from 'react';
import { FaRegSun, FaRegMoon, FaHeart } from 'react-icons/fa';

import { Container, TextWrapper, ImageWrapper, Footer } from './styles';

import Calculator from '../../components/Calculator';

import circle from '../../assets/images/circle.svg';
import circleDarker from '../../assets/images/circleDarker.svg';
import illustration from '../../assets/images/illustration.svg';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      darkMode: false,
    };
  }

  componentDidMount() {
    const darkMode = JSON.parse(localStorage.getItem('darkMode'));

    this.setState({
      darkMode,
    });

    if (darkMode === 'true') {
      return document.body.classList.add('dark');
    }
    return document.body.classList.remove('dark');
  }

  componentDidUpdate(_, prevState) {
    const { darkMode } = this.state;

    if (prevState.darkMode !== darkMode) {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));

      if (darkMode) {
        return document.body.classList.add('dark');
      }
      return document.body.classList.remove('dark');
    }

    return null;
  }

  darkOnOff = () => {
    const { darkMode } = this.state;

    this.setState({
      darkMode: !darkMode,
    });
  };

  render() {
    const { darkMode } = this.state;

    return (
      <>
        <Container darkMode={darkMode}>
          <div>
            {darkMode ? (
              <FaRegSun onClick={() => this.darkOnOff()} />
            ) : (
              <FaRegMoon onClick={() => this.darkOnOff()} />
            )}

            <TextWrapper darkMode={darkMode}>
              <h1>Open Source Calculator</h1>
              <p>
                An open source calculator developed with React. You can access
                the code{' '}
                <a
                  href="https://github.com/matheus97sm/calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </p>
            </TextWrapper>

            <ImageWrapper>
              {darkMode ? (
                <img
                  className="circleDarker"
                  src={circleDarker}
                  alt="Circle"
                  type="image/svg"
                />
              ) : (
                <img
                  className="circle"
                  src={circle}
                  alt="Circle"
                  type="image/svg"
                />
              )}
              <img
                className="illustration"
                src={illustration}
                alt="Illustration by Slidesgo"
                type="image/svg"
                title="Illustration by Slidesgo and Freepik: https://br.freepik.com/fotos-vetores-gratis/ciencia"
              />
            </ImageWrapper>
          </div>

          <Calculator darkMode={darkMode} />
        </Container>
        <Footer darkMode={darkMode}>
          <p>
            Made with <FaHeart /> by{' '}
            <a
              href="https://mathdev.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              Math
            </a>
            .
          </p>
        </Footer>
      </>
    );
  }
}
