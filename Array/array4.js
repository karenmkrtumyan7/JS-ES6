// Given an array of integers. Write a function that return new array from first array,
// where removed even numbers, and odd numbers was multiplied with new array
// length

function evenNumsMulti(arr) {
    const oddNumsMulti = arr.filter((elem)=>elem % 2 !== 0);
	const oddNumsMultiLength = oddNumsMulti.length;
   	return oddNumsMulti.map((currentValue)=>currentValue * oddNumsMultiLength);
    
}
console.log(evenNumsMulti([5, 4, 78, 0, -3, 7]));

