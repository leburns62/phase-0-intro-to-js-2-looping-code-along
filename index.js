
function writeCards(names, eventName) {
    let message = []
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }

    return message;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num -= 1;
    }
}
