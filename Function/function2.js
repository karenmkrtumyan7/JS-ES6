// 2. Write a function that calculates sum, difference, multiplication and division between given array elements depending on passed operation symbol.
//  Write appropriate function for each operation.

function calcSum(arr) {
    var length = arr.length;
    var res = 0;
    for (var i = 0; i < length; i++){
      res += arr[i];
    }
    return res;
  }
  
  function calcDifference(arr) {
    var length = arr.length;
    var res = 0;
    for (var i = 0; i < length; i++){
      res -= arr[i];
    }
    return res;
  }
  
  function calcMultiplication(arr) {
    var length = arr.length;
    var res = 0;
    for (var i = 0; i < length; i++){
      res *= arr[i];
    }
    return res;
  }
  
  function calcSumDivision(arr) {
    var length = arr.length;
    var res = 0;
    for (var i = 0; i < length; i++){
      res /= arr[i];
    }
    return res;
  }
  
  console.log(calcSum([1, 2, 3]));