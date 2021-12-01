// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}

const h1 = document.getElementById('main-title');
h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'grey';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const section = document.querySelector('section');
const button = document.querySelector('button');

section.style.backgroundColor = 'red';
// section.className = 'red-bg';

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }
  // section.classList.toggle('visible');
  section.classList.toggle('invisible');
});

// section.innerHTML = '<h2>A new title</h2>';
const list = document.querySelector('ul');
list.innerHTML = list.innerHTML + '<li>Item 4</li>';

const div = document.querySelector('div');
// div.innerHTML = div.innerHTML + '<p>Something went wrong!</p>';
// div.insertAdjacentHTML('beforeend', '<p>Something went wrong!</p>');
// div.insertAdjacentHTML('beforeend', '<p>Something went wrong!</p>');

const list2 = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.textContent = 'Item 5'
list2.appendChild(newLi);
list2.append('Some text');

const firstLI = document.createElement('li');
firstLI.textContent = 'Random Item';
list2.firstElementChild.before(firstLI);

const secondLi = list2.children[1];
const anotherLi = document.createElement('li');
anotherLi.textContent = 'Injected in between';
secondLi.insertAdjacentElement('afterend', anotherLi);

const newLi2 = anotherLi.cloneNode(true);
secondLi.append(newLi2);


const listItems = document.querySelectorAll('li');
const listItems2 = list2.getElementsByTagName('li');
console.log(listItems2);
const newLi3 = document.createElement('li');
newLi3.textContent = 'ONE MORE ELEMENT';
listItems2.appendChild(newLi3);