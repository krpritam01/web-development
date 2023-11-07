function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function generateRandomNumberWithDelay(delayInSeconds) {
    console.log(`Generatin a random number after a delay of ${delayInSeconds} seconds...`);
    let countdown = 3;
    const countdownInterval = setInterval(() => {
        console.log(`${countdown} seconds remaining...`);
        countdown--;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            console.log(`Random number generated: ${randomNumber}`);
        }
    }, 1000);
}

generateRandomNumberWithDelay(3);

// OUTPUT:
// 3 seconds remaining...
// 2 seconds remaining...
// 1 seconds remaining...