const timer = document.getElementById('timer');

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let number;

start.addEventListener('click', function () {
    number = parseInt(timer.textContent);
    startTimer();
})

stop.addEventListener('click', function () {
    stopTimer();
})

reset.addEventListener('click', function () {
    timer.textContent = 0;
    stopTimer();
})

const incrementNumber = () => {
    number += 1;
    return number;
}

let startTime;

const startTimer = () => {
    startTime = setInterval(() => {
        const getNumber = incrementNumber();
        if (getNumber > 10) {
            clearInterval(startTime);
        } else {
            timer.textContent = getNumber;
        }
    }, 1000);
}

const stopTimer = () => {
    clearInterval(startTime);
}