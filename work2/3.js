const number = 131;

function hasAtLeastTwoSameDigits(number) {
    const numString = number.toString();
    if (numString.length !== 3) {
        return false;
    }

    for (let i = 0; i < numString.length; i++) {
        for (let j = i + 1; j < numString.length; j++) {
            if (numString[i] === numString[j]) {
                return true;
            }
        }
    }

    return false;
}

if (hasAtLeastTwoSameDigits(number)) {
    console.log(`В числе ${number} есть хотя бы две одинаковые цифры`);
} else {
    console.log(`В числе ${number} нет хотя бы двух одинаковых цифр`);
}
