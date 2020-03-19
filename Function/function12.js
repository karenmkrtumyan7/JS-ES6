// 12. Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even.
// The numbers obtained should be printed in a comma-separated sequence on a single line.

function checkDigitDiference(num1, num2) {
    var check = num1 + '' + num2;
    var checkLength = check.length;
    var found = true;
  
    for (var i = 0; i < checkLength; i++) {
      if (+check[i] % 2 === 0){
        continue;
      } else {
        found = false;
        return found;
      }
    }
    return found; 
  } 
  
function makeEvenArr(num1, num2) {
    var res = '';
    var check = checkDigitDiference(num1, num2);
  
    if (check === true) {
      for (var i = num1; i <= num2; i += 2) {
        if (i === num2) {
          res += num2; 
         } else {
          res += i + ',';
        }
      }
    } else {
      return 'Such numbers does not exist.';
    }
    return   '\"' + res + '\"' ;
}
  
 console.log (makeEvenArr(20, 42));
  
  