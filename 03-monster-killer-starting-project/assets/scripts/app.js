const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

const ATTACK_MODE = 'ATTACK';
const ATTACK_STRONG = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';


let battleLog = [];
let lastLoggedEntry;
let chosenMaxLife;

function getMaxLifeValues() {
  const enteredValue = prompt('Maximum life', 100);

  let parsedValue = parseInt(enteredValue);
  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw {message: 'Invalid user input, not a number'};
  }
  return parsedValue;100
}

try {
  chosenMaxLife = getMaxLifeValues();
} catch (error) {
  console.log(error);
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value) {
  let logEntry = {
      event: event,
      value: value,
      finalMonsterHealth: currentMonsterHealth,
      finalPlayerHealth: currentPlayerHealth
  };
  if (event === LOG_EVENT_PLAYER_ATTACK) {
    logEntry.target = 'MONSTER';
  } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry.target = 'MONSTER';
  } else if (event === LOG_EVENT_MONSTER_ATTACK) {
    logEntry.target = 'PLAYER'
  } else if (event === LOG_EVENT_PLAYER_HEAL) {
    logEntry.target = 'PLAYER';
  }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage);

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    alert('You would be dead but bonus life saved you');
    setPlayerHealth(currentPlayerHealth);
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
    writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WON');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
    writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WON');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('It\'s a draw');
    writeToLog(LOG_EVENT_GAME_OVER, 'A DRAW');
  }
  if (currentMonsterHealth <=0 || currentPlayerHealth <= 0) {
      reset();
    }
}

function attackMonster(attackType) {
  const maxDamage = attackType === ATTACK_MODE ? ATTACK_VALUE: STRONG_ATTACK_VALUE;
  const logEvent = attackType === ATTACK_MODE ? LOG_EVENT_PLAYER_ATTACK: LOG_EVENT_PLAYER_STRONG_ATTACK;
  // if (attackType === ATTACK_MODE) {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (attackType === ATTACK_STRONG) {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
// }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage);
  endRound();
}

function attackHandler() {
  attackMonster(ATTACK_STRONG);
;}

function strongAttackHandler() {
  attackMonster(ATTACK_STRONG);
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal over you max health!");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(LOG_EVENT_PLAYER_HEAL, healValue);
  endRound();
}

function printLogHandler() {
  let i = 0;
  for (const el of battleLog) {
    if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
      console.log(`#${i}`);
      for (const key in el) {
        console.log(`${key} => ${el[key]}`);
      }
      lastLoggedEntry = i;
      break;
    }
    i++;
  }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);