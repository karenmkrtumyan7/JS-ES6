//Write a function, which receives an array as an argument which elements arrays of
//numbers. Find biggest negative number of each array. If there is not any negative number,
//ignore that array. Check that items of the given array are arrays.

function calcArrElMulti(arr) {
    const res = [];
    
    if (!arr.every((current) => Array.isArray(current))) {
            return 'Invalid Argument';
    }

    arr.forEach((current) => {
        let minimums =  current.filter((item) => item < 0);

        if(Math.max(...minimums) !== -Infinity) res.push(Math.max(...minimums)); 
        else res.push(1);
        })

        if(Math.min(...res) === 1) {
            return 'No negatives';
        } 

        return res.reduce((calc, item) => calc * item);
}
console.log(calcArrElMulti([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]));
