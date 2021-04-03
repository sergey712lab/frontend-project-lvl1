import { cons } from '@hexlet/pairs';
import random from '../libs/random.js';
import playGame from '../index.js';

const description = 'What is the result of the expression?';

const arithmeticOperations = {
  '+': (val1, val2) => val1 + val2,
  '-': (val1, val2) => val1 - val2,
  '*': (val1, val2) => val1 * val2,
};

const mathSigns = Object.keys(arithmeticOperations);

const getQuestionAnswer = () => {
  const number1 = random(0, 20);
  const number2 = random(0, 20);
  const mathSign = mathSigns[random(0, mathSigns.length - 1)];
  const question = `${number1} ${mathSign} ${number2}`;
  const correctAnswer = arithmeticOperations[mathSign](number1, number2).toString();
  return cons(question, String(correctAnswer));
};

export default () => playGame(description, getQuestionAnswer);
