import React, { Component } from 'react';
import {
  FaPercent,
  FaDivide,
  FaTimes,
  FaPlus,
  FaMinus,
  FaEquals,
  FaAngleLeft,
} from 'react-icons/fa';

import { Container, Result, CalculatorKeyboard } from './styles';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberInMemory: [],
      atualTyping: 0,
      total: 0,
    };
  }

  componentDidUpdate(_, prevState) {
    const { atualTyping } = this.state;

    if (prevState.atualTyping !== atualTyping) return this.makeCalc();

    return null;
  }

  addNumber = e => {
    const { atualTyping } = this.state;

    const newNumber =
      atualTyping !== 0 ? atualTyping + e.target.innerText : e.target.innerText;

    if (e.target.innerText === '.' && String(atualTyping).indexOf('.') !== -1) {
      return;
    }

    this.setState({
      atualTyping: newNumber,
    });
  };

  addOperator = expressionSymbol => {
    const { atualTyping, numberInMemory } = this.state;

    if (expressionSymbol === 'c') {
      return this.setState({
        numberInMemory: [],
        atualTyping: 0,
        total: 0,
      });
    }

    if (expressionSymbol === '=') {
      this.setState({
        numberInMemory: [...numberInMemory, atualTyping],
        atualTyping: '',
      });

      return this.makeCalc();
    }

    if (!numberInMemory[0]) {
      return this.setState({
        numberInMemory: [atualTyping, expressionSymbol],
        atualTyping: 0,
      });
    }
    return this.setState({
      numberInMemory: [...numberInMemory, atualTyping, expressionSymbol],
      atualTyping: 0,
    });
  };

  makeCalc = () => {
    const { numberInMemory } = this.state;

    const totalValue = numberInMemory.reduce((total, number, indice, array) => {
      if (!(number * 1)) return total;

      if (array[indice - 1] === '+') return total + +number;
      if (array[indice - 1] === '-') return total - +number;
      if (array[indice - 1] === '÷') return total / +number;
      if (array[indice - 1] === '×') return total * +number;
      if (array[indice - 1] === '%') return (total / 100) * +number;

      return +number;
    }, 0);

    const formatedNumber = Number(`${Math.round(`${totalValue}e2`)}e-2`);

    return this.setState({
      total: formatedNumber,
    });
  };

  render() {
    const { numberInMemory, atualTyping, total } = this.state;
    const { darkMode } = this.props;

    return (
      <Container darkMode={darkMode}>
        <Result darkMode={darkMode}>
          <small>
            {numberInMemory.map(atual => `${atual} `)}
            {atualTyping}
          </small>
          <span>{total}</span>
        </Result>

        <CalculatorKeyboard darkMode={darkMode}>
          <button
            type="button"
            onClick={() => this.addOperator('c')}
            className="c"
          >
            C
          </button>
          <button type="button" onClick={() => this.addOperator('<')}>
            <FaAngleLeft />
          </button>
          <button type="button" onClick={() => this.addOperator('%')}>
            <FaPercent />
          </button>
          <button type="button" onClick={() => this.addOperator('÷')}>
            <FaDivide />
          </button>
          <button type="button" onClick={e => this.addNumber(e)}>
            7
          </button>
          <button type="button" onClick={e => this.addNumber(e)}>
            8
          </button>
          <button type="button" onClick={e => this.addNumber(e)}>
            9
          </button>
          <button type="button" onClick={() => this.addOperator('×')}>
            <FaTimes />
          </button>
          <button type="button" onClick={e => this.addNumber(e)}>
            4
          </button>
          <button type="button" onClick={e => this.addNumber(e)}>
            5
          </button>
          <button type="button" onClick={e => this.addNumber(e)}>
            6
          </button>
          <button type="button" onClick={() => this.addOperator('+')}>
            <FaPlus />
          </button>
          <button type="button" onClick={e => this.addNumber(e)}>
            1
          </button>
          <button type="button" onClick={e => this.addNumber(e)}>
            2
          </button>
          <button type="button" onClick={e => this.addNumber(e)}>
            3
          </button>
          <button type="button" onClick={() => this.addOperator('-')}>
            <FaMinus />
          </button>
          <button
            type="button"
            className="zero"
            onClick={e => this.addNumber(e)}
          >
            0
          </button>
          <button type="button" onClick={e => this.addNumber(e)}>
            .
          </button>
          <button type="button" onClick={() => this.addOperator('=')}>
            <FaEquals />
          </button>
        </CalculatorKeyboard>
      </Container>
    );
  }
}
