function capitalizeWords(input) {
    return input.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

const input1 = "ahoj svet";
console.log(capitalizeWords(input1)); // Výstup: "Ahoj Svet"

function isPalindrome(input) {
    const cleanedInput = input.replace(/\W/g, '').toLowerCase();
    const length = cleanedInput.length;

    for (let i = 0; i < length / 2; i++) {
        if (cleanedInput[i] !== cleanedInput[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

const input2 = "racecar";
console.log(isPalindrome(input2)); // Výstup: true

function filterEvenNumbers(numbers) {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}

const input3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filterEvenNumbers(input3)); // Výstup: [2, 4, 6, 8]

function isValidDateFormat(date) {
    const pattern = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    return pattern.test(date);
}

const input4_1 = "2023-07-31";
const input4_2 = "2023-07-1";
const input4_3 = "2023-20-11";
const input4_4 = "2223-07-31";

console.log(isValidDateFormat(input4_1)); // Výstup: true
console.log(isValidDateFormat(input4_2)); // Výstup: false
console.log(isValidDateFormat(input4_3)); // Výstup: false
console.log(isValidDateFormat(input4_4)); // Výstup: false

function maskCreditCard(cardNumber) {
    let visibleDigits = 4;

    if(visibleDigits > 4){
        visibleDigits = visibleDigits + Math.floor(visibleDigits/4)
    }

    let maskedPart = '';
    for (let i = 0; i < cardNumber.length - visibleDigits; i++) {
        if (cardNumber[i] === '-') {
            maskedPart = maskedPart + '-';
        }
        else{
            maskedPart = maskedPart + '#';
        }
    }

    const lastDigits = cardNumber.slice(-visibleDigits);
    return maskedPart + lastDigits;
}

const input5 = "1234-5678-9876-5432";
console.log(maskCreditCard(input5)); // Výstup: "####-####-####-5432"
