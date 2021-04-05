import { cons } from '@hexlet/pairs';
import random from '../libs/random.js';
import playGame from '../index.js';

const max = 100;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getQuestionAndCorrectAnswer = () => {
  const question = random(1, max);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => playGame(description, getQuestionAndCorrectAnswer);
