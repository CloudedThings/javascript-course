const task1 = document.getElementById('task-1');
task1.style.backgroundColor = 'red';

const task2 = document.querySelector('li:first-of-type');
task2.style.color = 'white';

// const newTitle = document.querySelector('title');
// newTitle.textContent = 'Assignment solved!';

const docHead = document.head;
const newTitle2 = document.head.querySelector('title');
newTitle2.textContent = 'Assignment solved again!';

const h1 = document.body.querySelector('h1:first-of-type');
h1.textContent = 'Assignment - Solved!';