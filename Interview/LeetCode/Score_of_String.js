let s = "hello";
let sum = 0;

for(let i = 0; i < s.length - 1; i++) {
    let current_char = s.charCodeAt(i);
    let next_char = s.charCodeAt(i + 1);

    sum = sum + Math.abs(current_char - next_char);
}

console.log(sum);