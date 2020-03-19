//Given a number. Write a function that calculates its sum of
//the digits and if that sum has more than 1 digit find the sum of
//digits of that number. Repeat that process if needed and return
//the result.

function calcSumDigitsBeforeOneDigit(num, i = 0, res = 0) {
    if (typeof num !== number) {
        return 'write number';
    }

    let number = num + '';
    let length = number.length;

    if (i < length) {
        res += +number[i];
        return calcSumDigitsBeforeOneDigit(num, i + 1, res);
     
    } else if ((res + '').length > 1) {
        return calcSumDigitsBeforeOneDigit(res);
    } else {
        return res;
    }
}

calcSumDigitsBeforeOneDigit(29)
