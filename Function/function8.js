// 8. Write a function to compute a new string from the given one by moving the first char to come after the next two chars, so "abc" yields "bca".
// Repeat this process for each subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.

function checkWordLengthInString(number, string){
 
      let wordHelp = '';
      let stringLength = string.length;
       for (let j = number; j < number + 3; j++) {
         if (string[j] == undefined) {
           return wordHelp;
         } else {
           wordHelp += string[j]
          }
       }
       return wordHelp;
  
} 

function Changer(string) {
  let res = '';
  let stringLength = string.length;
  for (let i = 0; i < stringLength; i+=3) {
    let wordHelp = checkWordLengthInString(i, string)
    if (wordHelp[1] !== undefined && wordHelp[2] !== undefined){
    res = res + wordHelp[1] + wordHelp[2] + wordHelp[0];
    } else {
        res = res + wordHelp
    }
  }
  return res;
}

console.log(Changer('aweyoolp'));