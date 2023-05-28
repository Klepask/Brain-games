#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { welcome } from '/Users/evvva/desktop/hexlet/frontend-project-44/src/cli.js'


console.log('Answer "yes" if the number is even, otherwise answer "no".')
const randomNumber = Math.ceil(Math.random() * 100)
const str = readlineSync.question('Question: ' + randomNumber + ' ') 
const arr2 = str.split(' ')
const answer = arr2[arr2.length - 1]

let i = 0;
while (i < 3) {
    if (number % 2 === 0 && answer === 'yes' || number % 2 !== 0 && answer === 'no') {
        console.log('Your answer: ' + number)
        console.log('Correct!')
        i++;
    } else {
        console.log('Your answer: ' + number)
        if (answer === 'yes') {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`)
        } else if (answer === 'no') {
            console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`)
        }
        console.log(`Let's try again, ${userName}!`)
    }
    console.log(`Congratulations, ${userName}!`);
}
