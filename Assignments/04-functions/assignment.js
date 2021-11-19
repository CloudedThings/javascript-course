// function sayHello(name) {
//   console.log('Hi ' + name);
// }
const DEFAULT_NAME = 'Anonymous';

const sayHello = name => console.log('Hi ' + name);

const sayHello2 = (word, name = DEFAULT_NAME) => {
  console.log(word + name);
}

const sayHello3 = () => {
  const word = 'No';
  const word2 = ' sound';
  return word + word2;
}

// console.log(sayHello('Les'))
// console.log(sayHello2('Hello '));

function checkInput (cb,...strings) {
  let hasEmptyString = false;
  for (const word of strings) {
    if (!word) {
      hasEmptyString = true;
      break;
    }
  }
  if (!hasEmptyString) {
    cb();
  }
}

checkInput(() => {
  alert('All not empty!')
}, 'hello ', 'world ', '!', 'not empty');