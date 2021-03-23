#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(console.log(`Hello, ${userName}!`));
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNumberRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
const isEven = (x) => x % 2 === 0;
let correctAnswer;
let wrongAnswer = false;
for (let i = 0; i < 3; i += 1) {
  const num = randomNumberRange(0, 100);
  if (isEven(num)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  console.log(`Question: ${num}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) console.log('Correct!');
  else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${userName}!`);
    wrongAnswer = true;
    break;
  }
}
if (wrongAnswer === false) {
  console.log(`Congratulations, ${userName}!`);
}
