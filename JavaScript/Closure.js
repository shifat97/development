// Closure -> a function which has access to its outer function properties.

function playground() {
    let counter = 0;
    return function() {
        counter++;
        return counter;
    }
}

const player1 = playground();
console.log(player1());
console.log(player1());
console.log(player1());

const player2 = playground();
console.log(player2());
console.log(player2());
