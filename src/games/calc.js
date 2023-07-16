import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What is the result of the expression?';

const calculate = (num1, num2, sign) => {
  let result = '';
  if (sign === '+') {
    result = num1 + num2;
  } else if (sign === '-') {
    result = num1 - num2;
  } else if (sign === '*') {
    result = num1 * num2;
  }
  return result;
};

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const symbol = ['+', '-', '*'];
  const randomSimbols = symbol[getRandomNumber(0, 2)];
  const question = (`${number1} ${randomSimbols} ${number2}`);
  const correctAnswer = String(calculate(number1, number2, randomSimbols));
  return [question, correctAnswer];
};

const calcRun = () => run(description, getGameData);

export default calcRun;
