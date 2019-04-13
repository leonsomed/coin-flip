function flip() {
    return Math.random() >= 0.5;
}

function randomNumber(limit) {
    if (typeof limit !== 'number') throw new Error('limit must be a number');
    if (limit < 0) throw new Error('limit must be greater than 0');
    if (limit >= 1000000) throw new Error('limit must be less than 1,000,000');

    let binaryStr = '';
    let currentLimit = 1;

    do {
        binaryStr += flip() ? '1' : '0';
        currentLimit = currentLimit << 1;
    } while (limit >= currentLimit);

    const number = parseInt(binaryStr, 2);

    return number < limit ? number : parseInt(binaryStr.substr(1) || '0', 2);
}

console.log(500, randomNumber(500));
console.log(1, randomNumber(1));
console.log(500, randomNumber(500));
console.log(1000001, randomNumber(1000001));

