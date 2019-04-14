function flip() {
    return Math.random() >= 0.5;
}

function randomNumber(limit) {
    if (typeof limit !== 'number') throw new Error('limit must be a number');
    if (limit < 0) throw new Error('limit must be greater than 0');
    if (limit >= 1000000) throw new Error('limit must be less than 1,000,000');

    let number = 0;
    const digits = Math.floor(Math.log2(limit));

    for (let i = 0; i < digits + 1; i++) {
        number = number << 1;
        number += flip() ? 1 : 0;
    }

    if (number >= limit) {
        number ^= digits ** 2;
    }

    return number;
}

console.log(500, randomNumber(3));
console.log(1, randomNumber(3));
console.log(500, randomNumber(3));
console.log(1000001, randomNumber(3)); // throw error
