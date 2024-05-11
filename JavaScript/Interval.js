let num = 0;

function setTimer() {
    num++;

    return num;
}

const printTimer = setInterval(() => {
    let getTimer = setTimer();

    if (getTimer > 10) {
        clearInterval(printTimer);
    } else {
        console.log(getTimer);
    }
}, 1000);
