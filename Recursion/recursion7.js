//Given an array of nested arrays. Write a recursive function
//that flattens it. (Hint create function that concats arrays).
function concArr(mainArr, conArr, i) {
    let keepArr = [];

    for (let j = mainArr.length - 1; j >= i; j--) {
        if (!Array.isArray(mainArr[j])) {
            keepArr.unshift(mainArr[j]);
        }
        mainArr.pop()

    }

    for (let j = 0; j < conArr.length; j++) {
        mainArr.push(conArr[j]);
    }

    for (let j = 0; j < keepArr.length; j++) {
        mainArr.push(keepArr[j])
    }
    return mainArr;
}

function flattenArray(arr, array=[]) {

    if (array.length === 0) {
        array = array.concat(arr); // mer tvac array@ chpchacenlu hamar
    }

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray((array[i]))) {
            array = concArr(array, array[i], i);
            flattenArray(array);
        }
    }
    return array;

}

console.log(flattenArray([1, [3, 4, [1, 2]], 10]))

// lucum 2rd
function f(array =[]) {
	
  var res = [];
  for (var i in array){
  	if(Array.isArray(array[i] )){
  		res = res.concat(f(array[i]));
  	} else {
  		res.push(array[i]);
  	}
  }
  return res;
}

console.log(f([7,[1,[2,3,[4]],5]]))





