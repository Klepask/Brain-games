import { run } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const calculate = (x, y, sign) => {
  switch (sign) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    default:
      throw new Error("Invalid sign");
  }
};

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const randomSimbols = operators[getRandomNumber(0, 2)];
  const question = (`${number1} ${randomSimbols} ${number2}`);
  const correctAnswer = String(calculate(number1, number2, randomSimbols));
  return [question, correctAnswer];
};

const calcRun = () => run(description, getGameData);

export default calcRun;
