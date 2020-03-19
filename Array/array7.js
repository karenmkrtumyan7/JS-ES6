//Write a function, which will receive a number between 0 to 999,999  and spell out
//that number in English.

function oneDigitNumber(number) {
    const arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return ' ' + arr[number];
}

function twoDigitNumber(number) {
    const lastdigit = number % 10;
    const firstdigit = (number - lastdigit) / 10;
    const lastdigitInWord = oneDigitNumber(lastdigit);
    const arr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arr2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number >= 10 && number <= 19) {
        return ' ' + arr[lastdigit];
    } else {
        return ' ' + arr2[firstdigit] + lastdigitInWord;
    }
}

function threeDigitNumber(number) {
    let str = number + '';
    if (number <= 99)
        return twoDigitNumber(number);
    return oneDigitNumber(+str[0]) + ' hundred' + twoDigitNumber(+str.slice(1))
}

function makeNumberWord(number) {
    if (!number) return 'zero';
    const arr = ['', 'thousand', 'million', 'billion', 'trillion'];
    let res = '';
    const numChecker = Math.ceil(('' + number).length / 3);

    for (let i = 0; i < numChecker; i++) {
        res = threeDigitNumber(number % 1000) + ' ' + arr[i] + res;
        number = Math.floor(number / 1000);
    }
    return res.trim();
}

console.log(makeNumberWord(9999990020));


