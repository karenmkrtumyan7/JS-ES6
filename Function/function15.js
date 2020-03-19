// 15. Write a function, which receives an array as an argument which elements arrays of numbers. 
// Find product of biggest negative number of each array.
// If there is not any negative number, ignore that array. Check that items of the given array are arrays.

function checkExistArrInArr(arr) {
    arrLength = arr.length;
    let isExsist = true;
    for(let i = 0; i < arrLength; i++) {
      if( typeof(arr[i]) !== 'string' && arr[i].length !== undefined){
        isExsist = true;
    } else {
      isExsist = false;
      return isExsist;
    }
  }
    return isExsist;
  }
  
  function arrInArrLargeNegativesMulty(arr) {
    let arrLength = arr.length;
    let result = 1;
    let isExist = checkExistArrInArr(arr);
    if (isExist) {
      for ( let i = 0; i < arrLength; i++) {
        arrInArrLength = arr[i].length;
        let largeNegative = -Infinity;

      for ( let j = 0; j < arrInArrLength; j++) {
          if (arr[i][j] < 0 && arr[i][j] > largeNegative){
              largeNegative = arr[i][j]
          }  
        }

        if (largeNegative !== -Infinity) {
          result *= largeNegative;
        }
      }
        if (result === 1){
          result = 'No negatives';
        }
    } else {
      result = 'Invalid Argument';
    }
    return result;
  }
  console.log(arrInArrLargeNegativesMulty([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]));
  
  