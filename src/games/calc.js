import run from '../index.js';
import { getRandomNumber, arrayChoice } from '../utils.js';

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
      throw new Error('Invalid sign: ' + sign);
  }
};

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const randomSign = arrayChoice(signs);
  const question = `${number1} ${randomSign} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, randomSign));
  return [question, correctAnswer];
};

const runCalc = () => run(description, getGameData);

export default runCalc;
