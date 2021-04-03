import { cons } from '@hexlet/pairs';
import random from '../libs/random.js';
import playGame from '../index.js';

const max = 100;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const getQuestionAndCorrectAnswer = () => {
  const question = random(1, max);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => playGame(description, getQuestionAndCorrectAnswer);
