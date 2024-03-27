const number = 123;

function isArmstrongNumber(number) {
    const numString = number.toString();
    const numLength = numString.length;
    let sum = 0;

    for (let i = 0; i < numLength; i++) {
        sum += Math.pow(parseInt(numString[i]), numLength);
    }

    return sum === number;
}

if (isArmstrongNumber(number)) {
    console.log(`${number} является числом Армстронга`);
} else {
    console.log(`${number} не является числом Армстронга`);
}
