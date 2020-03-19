//Given a string of digits, output all the contiguous substrings of length n in that string.

function getSubstrings(num, quantity) {
    const numToStr = num + '';
    let res = [];

    for (let i = 0; i < numToStr.length - 2; i++) {
        if (numToStr.length >= i + quantity) res.push(numToStr.substr(i, quantity));
        else break;
    }
    return res.join();
}

console.log(getSubstrings('abcdfghz', 7));
