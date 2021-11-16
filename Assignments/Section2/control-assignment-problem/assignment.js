const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random();

console.log(randomNumber);
console.log(randomNumber2);

if (randomNumber > 0.7) {
  alert("Number is higher then 0.7");
}

const arr = [1, 2, 3, 4, 5, 6];

for (const key in arr) {
  if (Object.hasOwnProperty.call(arr, key)) {
    const element = arr[key];
    console.log(key);
  }
}

for (let index = arr.length; index >= 0; index--) {
  console.log(arr[index]);
}

if (randomNumber > 0.7 && randomNumber2 > 0.7) {
  alert("both numbers are higher then 0.7");
} else if (randomNumber < 0.2 || randomNumber2 < 0.2) {
  alert(`One of the numbers is less then 0.2`);
}