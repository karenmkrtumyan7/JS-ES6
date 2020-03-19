//Write a function which receives an array and a number as arguments and returns a new array
//from the elements of the given array which are larger than the given number.
function searchLargeThanNumber(arr, num, i = 0, res = []) {
   
    if (arr[i] > num && arr.length - 1 >= i) {
        res.push(arr[i]);     
    }
    if(arr.length - 1 >= i) {
        searchLargeThanNumber(arr,num,i+1,res);
    } else {
        return res;
    }
    if (res.length === 0) {
        res = 'Such values do not exist.'
    }
   return res; 
}

searchLargeThanNumber([10, 25, 16, -5, 30, 15, 24] , 16);
