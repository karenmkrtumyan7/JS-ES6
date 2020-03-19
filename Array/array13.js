//Given an array of integers, find the pair of adjacent elements that has the largest product
//and return that product.

function multiAdjacmenrEl(arr) {
    let bigMulti = -Infinity;

    if (arr.length <= 1) {
        return 'Array length will be 2 or big';
    }

     arr.reduce((calc, current) => { 
            if (calc * current > bigMulti) {
                bigMulti = calc * current;
            } 
             return current;
     });  
     return bigMulti;          
}

console.log(multiAdjacmenrEl([7, 1, 1, 2, 3, 4, 8]))
