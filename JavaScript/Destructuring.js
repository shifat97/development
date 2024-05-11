// swap using destructuring
let x = 100, y = 200;
[x, y] = [y, x];
console.log(x + " " + y);

const person = {
    name: "John Snow",
    age: 30,
    phone: "01794775275",
}
const { name, age, phone } = person;
console.log(name + ", " + age + ", " + phone);

const [n1, n2] = [45, 99];
console.log(n1 + " " + n2);