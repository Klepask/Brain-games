import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, difference, progressionLength) => {
  const arr = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    const newNumber = start + i * difference;
    arr.push(newNumber);
  }

  return arr;
};

const getGameData = () => {
  const start = getRandomNumber(1, 100);
  const difference = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 20);
  const progression = getProgression(start, difference, progressionLength);
  const hiddenSymbol = getRandomIndex(progression.length);
  const correctAnswer = `${progression[hiddenSymbol]}`;
  progression[hiddenSymbol] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgression = () => run(description, getGameData);

export default runProgression;
