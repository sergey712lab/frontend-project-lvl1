import { cons } from '@hexlet/pairs';
import random from '../libs/random.js';
import playGame from '../index.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getSequence = (filler, increment, length) => Array(length)
  .fill(filler)
  .map((value, index) => value + increment * index);

const getQuestionAndCorrectAnswer = () => {
  const filler = random(1, 10);
  const increment = random(1, 7);
  const sequence = getSequence(filler, increment, progressionLength);
  const gapIndex = random(0, sequence.length - 1);
  const answer = sequence[gapIndex].toString();
  sequence[gapIndex] = '..';
  const question = sequence.join(' ');
  return cons(question, answer);
};

export default () => playGame(description, getQuestionAndCorrectAnswer);
