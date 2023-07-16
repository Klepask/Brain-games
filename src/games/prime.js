import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const arr = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
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

const primeRun = () => run(description, getGameData);

export default primeRun;
