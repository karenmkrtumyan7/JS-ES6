// 7. Write a function to compute a new string from the given one by moving the first char to come after the next two chars,
// so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.

  // Variant 1
function checker(i, string) {
    let res = '';

    if(string[i + 1] !== undefined && string[i + 2] !== undefined){
        res += string[i + 1] + string[i + 2] + string[i]; 
    } else if(string[i + 1] === undefined && string[i + 2] === undefined) {
        res += number[i]
    } else if(string[i + 1] !== undefined && string[i + 2] === undefined) {
        res += string[i] + string[i + 1]
  }

  return res;
}

function Changer(string) {
  let length = string.length;
  let result = '';
  for (let i = 0; i < length; i+=3) {
    result += checker(i , string);
}
  

  return result;
}
console.log(Changer('aweyoolp'));