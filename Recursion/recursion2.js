function checkNumDigitEven (num) {
    var number = num + '';
    for (let i = 0; i < number.length; i++) {
        if(number[i] % 2 !== 0) {
            return false;
        }
    } 
    return true;
}

function findBetweenTwoNumbersAllNumbers(num1, num2) {
let result = '';
if (!checkNumDigitEven(num1)) {
    num1 = num1 + 1;
}

for (let i = num1; i <= num2; i+=2){
    if(checkNumDigitEven(i)) {
        if (i < num2 - 1){
        result += i + ' '; // verjin probely chlinelu hamar 
        } else {
            result += i;
        }
    }
}
var res;
return  res = !!result ? '\"' + result + '\"'  : 'Dont Excist' ;
var o;
}

console.log(findBetweenTwoNumbersAllNumbers(19, 42));