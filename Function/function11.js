// 11. Write a function to find longest substring in a given a string without repeating characters except space character.
// If there are several, return the last one. Consider that all letters are lowercase.

let emptyStr = '';
function getLongLengthSubstring(substr) {
    emptyStr = substr.length >= emptyStr.length ? substr : emptyStr; 
    return emptyStr;
}

function getSubstring(str) {
	let length = str.length;
	let substr = '';
	let result;
	let newCheckPoint = 0;
	for (let i = 0; i < length; i++) {
		for (let j = newCheckPoint; j < i; j++) {
			if (str[j] === str[i] && str [j] !== ' ') {
				i = j + 1;
				result = getLongLengthSubstring(substr);
				substr = '';
				newCheckPoint = j + 1;
				break
			} 
		}
		substr += str[i]; 
		if (i === length - 1) {
			result = getLongLengthSubstring(substr);
		}
	}
	return result;
}	

console.log(getSubstring('parting your soup is not a miracle, bruce'));