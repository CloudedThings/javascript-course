const startGameBtn = document.getElementById('start-game-btn');
let gameIsRunning = false;

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! You\'ll get to play ${DEFAULT_USER_CHOICE}!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const userChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (userChoice) {
    winner = getWinner(computerChoice, userChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  let message = `You picked ${userChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore `;
  if (winner === RESULT_DRAW) {
    message = message + "it's a draw";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'you win';
  } else {
    message = message + 'you loose';
  }
  alert(message);
  gameIsRunning = false;
});

// THIS SECTION IS NOT RELATED TO THE GAME
// const sumUp = (resultHandler, ...numbers) => {
//   const validateNumber = (number) => {
//     return isNaN(number) ? 0 : number;
//   };

//   let sum = 0;
//   for (const num of numbers) {
//     sum += validateNumber(num);
//   }
//   resultHandler(sum,);
// };

// const subtract = function(resultHandler, ...numbers) {
//   let result = 0;
//   for (const num of numbers) {
//     result -= num;
//   }
//   resultHandler(result);
// };

const calc = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
      };
    
      let sum = 0;
      for (const num of numbers) {
        if (operation === 'ADD') {
          sum += validateNumber(num);
        } else if (operation === 'SUB') 
          sum -= validateNumber(num);
      }
      resultHandler(sum);
      return sum;
};

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result)
};

console.log(calc(showResult.bind(this, 'Result after adding is: '), 'ADD', 12, 213, 44, 2, 32));
console.log(calc(showResult.bind(this, 'Result after subtracting is: '), 'SUB', 100, 12, 3, 122));
