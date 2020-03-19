// 3. Given a phone number. Write a function to clean it up, so it is valid.
// The rules are as follows:

// If the phone number is less than 10 digits assume that it is a bad number
// If the phone number is longer than 10, then it is a bad number
// If the phone number is 10 digits assume that it is good
// If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim + and return remaining 10 digits.
// If the phone number contains + symbol more than one, consider it as a bad number.
// If the phone number contains + symbol not as the first character, consider it as a bad number.

// Ignore spaces between digits.

function checkLength(number) {
    var result;
    var length = number.length
    for (var i = 0; i < length; i++) {
      if (number[i] >= '0' && number[i] <= '9' && (length > 10 || length < 10)) {
          result = 'Bad number';
      } else if (number[i] >= '0' && number[i] <= '9' && length === 10) {
          result = 'Good number'; 
      } else {
        return ;
      }    
   }
   return result;
  } 
  
  function checkPlusInNumber(number) {
    var length = number.length;
    var result = '';
    for (var i = 1; i < length; i++) {
      if (number[0] === '+' && number[i] >= '0' && number[i] <= '9' && length === 11) {
          result += number[i]; 
      } else  if (number[0] !== '+' && number[i] === '+') {
        for (var j = i + 1; j < length + 1; j++) {
          if(number[j] !== '+'){
            result ='bad number'
          } else {
            break;
          }
          
        }
      } else {
        result = 'bad number'
      }
    
    } 
     return result;
  }
  
  function checkValidaty(number) {
    var valid = checkLength(number) !== undefined ? checkLength(number) : checkPlusInNumber(number);
    return valid;
  }
  
  console.log(checkValidaty('232356+8974'));