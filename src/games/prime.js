import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const arr = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      arr.push(i);
    }
  }

  if (arr.length === 2) {
    return true;
  }
  return false;
};

const getGameData = () => {
  const number = getRandomNumber(2, 100);
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrime = () => run(description, getGameData);

export default runPrime;
