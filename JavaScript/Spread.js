const max = Math.max(6, 23, 45, 1, 89, 23);
console.log(max);

const numbers = [6, 23, 45, 1, 100, 23];
const max2 = Math.max(...numbers); // spread operator
console.log(max2); 

const elements = [...numbers, 9999];
console.log(elements);