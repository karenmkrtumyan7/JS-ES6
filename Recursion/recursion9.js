function becameCaseValues(obj = {}, result = {}) {
    
    if (obj === null || typeof obj !== 'object') {
        return 'write object';
    }

    let arr = [];

    for (var key in obj) {
        if (result.hasOwnProperty(obj[key])) {
            if (!Array.isArray(result[obj[key]])) {
                 arr.push(result[obj[key]]);
                 result[obj[key]] = arr; 
            }   
            result[obj[key]].push(key);   
        } else {
            result[obj[key]] = key;
        }
    }
    return result;
}

console.log(becameCaseValues({ a: '1', b: '2', c: '2', d: '2' }));

