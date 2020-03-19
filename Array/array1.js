// Write a function, which receives an array as an argument which elements arrays of
// numbers. Find biggest negative number of each array. Return product of that
// numbers.If there is not any negative number in an array, ignore that one. Check that
// items of the given array are arrays.

function calcArrElMulti(arr) {
     if (!arr.every((current) => Array.isArray(current))) {
            return 'Invalid Argument';
        }
    
    let result = arr.map(function(currentValue){

        let res = currentValue.reduce(function(calc, current){

            if(current < 0 && current > calc){
                return current;
            } else {
                return calc;
            }

        }, -Infinity);

       return  res !== -Infinity ? res : 1; 

    });

    if(Math.min(...result) === 1) {
        return 'No negatives';
    } else {
        return result.reduce((calc, current) => calc * current);
    }
    
}

console.log(calcArrElMulti([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]));
