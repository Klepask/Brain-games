import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, difference, length) => {
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    const number = start + i * difference;
    progression.push(number);
  }

  return progression;
};

const getGameData = () => {
  const start = getRandomNumber(1, 100);
  const difference = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 20);
  const progression = getProgression(start, difference, length);
  const hiddenIndex = getRandomIndex(progression.length);
  const correctAnswer = `${progression[hiddenIndex]}`.toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgression = () => run(description, getGameData);

export default runProgression;
