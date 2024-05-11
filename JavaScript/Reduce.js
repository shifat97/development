const numbers = [4, 5, 7, 1, 2, 66];

const total = numbers.reduce((previous, current) => {
    return previous + current;
}, 0)

console.log(total);