// 13. Write a function, which will receive a number between 0 to 999,999 and spell out that number in English.

function oneDigitNumber(number) {
    if (number === 0) {
        return ' ';
    } else if (number === 1) {
        return ' one';
    } else if (number === 2) {
        return ' two';
    } else if (number === 3) {
        return ' three';
    } else if (number === 4) {
        return ' four';
    } else if (number === 5) {
        return ' five';
    } else if (number === 6) {
        return ' six';
    } else if (number === 7) {
        return ' seven';
    } else if (number === 8) {
        return ' eigth';
    } else if (number === 9) {
        return ' nine';
    }         
}

function twoDigitNumber(number) {
    let lastdigit = number % 10;
    let firstdigit = (number - lastdigit) / 10;
    let lastdigitInWord = oneDigitNumber(lastdigit);
    if (number === 10) {
      return ' ten'
    } else if (number === 11){
        return ' eleven';
    } else if (number === 12){
        return ' twelve';
    } else if (number === 13){
        return ' thirteen';
    } else if (number === 14){
        return ' fourteen';
    } else if (number === 15){
        return ' fiveteen';
    } else if (number === 16){
        return ' sixteen';
    } else if (number === 17){
        return ' seventeen';
    } else if (number === 18){
        return ' eigthteen';
    } else if (number === 19){
        return ' nineteen';
    } else if (firstdigit === 0) {
        return '' + lastdigitInWord;
    } else if (firstdigit === 2) {
        return ' twenty' + lastdigitInWord;
    } else if (firstdigit === 3) {
        return ' thirty' + lastdigitInWord;
    } else if (firstdigit === 4) {
        return ' fourty' + lastdigitInWord;
    } else if (firstdigit === 5) {
        return ' fifty' + lastdigitInWord;
    } else if (firstdigit === 6) {
        return ' sixty' + lastdigitInWord;
    } else if (firstdigit === 7) {
        return ' seventy' + lastdigitInWord;
    } else if (firstdigit === 8) {
        return ' eigthy' + lastdigitInWord;
    } else if (firstdigit === 9) {
        return ' ninety' + lastdigitInWord;
    }                                                                  
}

function threeDigitNumber(number) {
    let lastTwodigit = number % 100; 
    if (number !== 000){
    let firstdigit = (number - lastTwodigit) / 100;
    let lastTwodigitInWord = twoDigitNumber(lastTwodigit);
    let firstdigitInWord = oneDigitNumber(firstdigit) + ' hundred';
    return firstdigitInWord + lastTwodigitInWord;
    } else {
      return '';
    }
}

function fourToSixDigitNumber(number) {
    if (number < 9999 && number >= 1000){
        let lastThreeDigit = number % 1000;
        let firstOneDigit = (number - lastThreeDigit) / 1000;
        let firstOnedigitInWord = oneDigitNumber(firstOneDigit) + ' thousand';
        let lastThreeDigitInWord = threeDigitNumber(lastThreeDigit);
        return firstOnedigitInWord + lastThreeDigitInWord;
    } else if (number < 99999 && number >= 10000) {
        let lastThreeDigit = number % 1000;
        let firstTwoDigit = (number - lastThreeDigit) / 1000;
        let firstTwodigitInWord = twoDigitNumber(firstTwoDigit) + ' thousand';
        let lastThreeDigitInWord = threeDigitNumber(lastThreeDigit);
        return firstTwodigitInWord + lastThreeDigitInWord;
    } else {
        let lastThreeDigit = number % 1000;
        let firstThreeDigit = (number - lastThreeDigit) / 1000;
        let firstThreedigitInWord = threeDigitNumber(firstThreeDigit) + 
        ' thousand';
        let lastThreeDigitInWord = threeDigitNumber(lastThreeDigit);
        return firstThreedigitInWord + lastThreeDigitInWord;
    }
}

function makeNumberWord(number) {
    if (number === 0) {
        return 'zero'
    } else if (number >= 1 && number <= 9) {
        return oneDigitNumber(number);
    } else if (number >= 10 && number <= 99) {
        return twoDigitNumber(number);
    } else if (number >= 100 && number <= 999) {
        return threeDigitNumber(number);
    } else if (number >= 1000 && number <= 999999) {
        return fourToSixDigitNumber(number);
    }
}

console.log(makeNumberWord(16456));
