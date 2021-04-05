import { cons } from '@hexlet/pairs';
import random from '../libs/random.js';
import playGame from '../index.js';

const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));

const max = 100;
const description = 'Find the greatest common divisor of given numbers.';
const getQuestionAndCorrectAnswer = () => {
  const num1 = random(1, max);
  const num2 = random(1, max);
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return cons(question, answer);
};

export default () => playGame(description, getQuestionAndCorrectAnswer);
