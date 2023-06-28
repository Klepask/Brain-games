import { randomNumber, engineGames } from '/../src/index.js';

const gameRules = 'What number is missing in the progression?';

const arithmeticProgression = (start, difference, progressionLength) => {
  const arr = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    const newNum = start + i * difference;
    arr.push(newNum);
  }

  return arr;
};

const getGameData = () => {
  const start = randomNumber(1, 100);
  const difference = randomNumber(1, 10);
  const progressionLength = randomNumber(5, 20);
  const progression = arithmeticProgression(start, difference, progressionLength);
  const hiddenSimbol = randomNumber(0, progression.length - 1);
  const correctAnswer = `${progression[hiddenSimbol]}`;
  progression[hiddenSimbol] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => engineGames(gameRules, getGameData);

export default progressionGame;
