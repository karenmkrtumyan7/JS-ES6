// 1. Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

function oddNumber(arr) {
    length = arr.length;
    var res = [];
    for (var i = 0; i < length; i++) {
      if(arr[i] % 2 === 1) {
        res.push(arr[i])
      }
    }
    return res;
  }
  
  function evenNumber(arr) {
    length = arr.length;
    var res = [];
    for (var i = 0; i < length; i++) {
      if(arr[i] % 2 === 0) {
        res.push(arr[i])
      }
    }
    return res;
  }
  
  console.log(oddNumber([45, 12, 3, 6, 17, 0]));
  console.log(evenNumber([45, 12, 3, 6, 17, 0]));
  