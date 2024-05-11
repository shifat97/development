localStorage.setItem('Drinks', 'Milk');
localStorage.setItem('Drinks', 'Water');
localStorage.setItem('City', 'United States');
localStorage.setItem('University', 'Dhaka University');

const user = {
    username: 'john97',
    password: 'john97@344',
    isLogIn: false
}

localStorage.setItem('user-credential', JSON.stringify(user));

const getUser = localStorage.getItem('user-credential');

console.log(JSON.parse(getUser));

localStorage.removeItem('University');

const numbers = [10, 12, 20, 30, 40, 22, 44];
localStorage.setItem('number-list', JSON.stringify(numbers));

const getNumbers = localStorage.getItem('number-list');
console.log(JSON.parse(getNumbers));

// localStorage.clear();