import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What is the result of the expression?';
const signs = ['+', '-', '*'];

const calculate = (x, y, sign) => {
  switch (sign) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Invalid sign: ${sign}`);
  }
};

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const signIndex = getRandomIndex(signs.length) - 1;
  const sign = signs[signIndex];
  const question = `${number1} ${sign} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, sign));
  return [question, correctAnswer];
};

const runCalc = () => run(description, getGameData);

export default runCalc;
