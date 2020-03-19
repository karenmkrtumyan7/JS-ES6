// Given an array of strings and numbers. Print the number of integers and the number
// of strings in the array.

function calcArrayElemTypeQuantity(arr) {

    
    let objForType = {
        Numbers: 0,
        Strings: 0,
    }

    arr.map((currentValue) => {
        if (typeof currentValue === 'number')
            objForType.Numbers++;
        else
            objForType.Strings++;
    }
    );

    const Result = ` \"Numbers: ${objForType.Numbers}, Strings: ${objForType.Strings}\" `;
    return Result;

}
console.log(calcArrayElemTypeQuantity([1, '10', 'hi', 2, 3]));
