!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(console.log(`Hello,${userName}!`));
console.log('What is the result of the expression?');
var input = 'level 3'
input = input.split(' ')
var n = Number(input[1])
var x = ['/','*','-','+']
function randomNumberRange(min, max) {
return Math.floor(Math.random() * (max - min) + min);
}
let correctAnswer;
let wrongAnswer = false;
var a = ''
for (let i = 0; i < 3; i += 1) {
  if(i !== n - 1){
        var n1 = randomNumberRange(1, 100)
        var m = randomNumberRange(0, x.length);
        var str = x[m];
        a += n1
        a +=' '+str+' '
    }else{
        a += n1
    }  
}
  console.log(`Question: ${num}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) console.log('Correct!');
  else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLets try again, ${userName}!`);
    wrongAnswer = true;
    break;
  }
}
if (wrongAnswer === false) {
  console.log(`Congratulations, ${userName}!`);
}
