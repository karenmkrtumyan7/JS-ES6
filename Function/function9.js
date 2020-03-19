// 9. Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string․
// If there are several words which are the longest ones, print the last word(words can be separated by space, comma or hyphen).

function giveWordArr(str) {
    let word = '';
    let arr = [];
    
      for (let i = 0; i < str.length; i++) {
          if (str[i] == ' ' || str[i] == ',' || str[i] == '-') {  
            arr.push(word)
            word = ' ';
          } else {
            word += str[i];
          }
      }
      return arr;
    }
  
  
  function searchMaxLength(str) {
    let onlyWord = giveWordArr(str);
    let onlyWordLength = onlyWord.length;
    let max = onlyWord[0];
  
     
      for (let i = 0; i < onlyWordLength; i++){
        if (max.length < onlyWord[i].length) {
          max = onlyWord[i];
        } 
      }
    return max;
  }
  
  console.log(searchMaxLength('Which would be worse - to live as a monster, or to die as a good man?'))