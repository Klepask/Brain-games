import { randomNumber, engineGames } from '../src/index.js';

//правила
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
//проверка на четность
const isEven = (num) => {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  };

  const getGameData = () => {
    const number = randomNumber(1, 100);
    const question = number;
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  
  const evenGame = () => engineGames(gameRules, getGameData);
  
  export default evenGame;

// console.log('Welcome to the Brain Games!');
//const userName = readlineSync.question('May I have your name? ');
//console.log(`Hello, ${userName}!`);
//console.log('Answer "yes" if the number is even, otherwise answer "no".')
//const randomNumber = Math.ceil(Math.random() * 100)
//сonst str = readlineSync.question('Question: ' + randomNumber + ' ') 
//const arr2 = str.split(' ')
//const answer = arr2[arr2.length - 1]

//let i = 0;
//while (i < 3) {
//    if (randomNumber % 2 === 0 && answer === 'yes' || randomNumber % 2 !== 0 && answer === 'no') {
//        console.log('Your answer: ' + randomNumber)
//        console.log('Correct!')
//    } else {
//        console.log('Your answer: ' + randomNumber)
//        if (answer === 'yes') {
//            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`)
//            console.log(`Let's try again, ${userName}!`)
//        } else if(answer === 'no') {
//            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`)
//            console.log(`Let's try again, ${userName}!`)
//        }
//    }
//    i++;
//}
//console.log(`Congratulations, ${userName}!`)