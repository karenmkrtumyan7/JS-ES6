// 4. Given a word and a list of possible anagrams, select the correct sublist.

function callArrEveryWord(arr , i) {
    return arr[i];
  }
  
  function compareWordsLength (word, arr, i) {
   var wordLength = word.length;
    var ArrWord = callArrEveryWord(arr, i);
   if ( ArrWord.length === wordLength) {
      return callArrEveryWord(arr, i);
    }
  }
  
  function checkSublist(word, arr) {
    arrLength = arr.length;
    var wordLength = word.length;
    var found = true;
    var res = [];
    for (var i = 0; i < arrLength; i++) {
      var arrWord = compareWordsLength(word, arr, i);
      if (arrWord !== undefined){
        var letterCount = 0;
        for (var a = 0; a < wordLength; a++){
  
          for (var j = 0; j < wordLength; j++) {
              if (word[a] === arrWord[j]) {
              letterCount++;
              } 
  
          }
              if (letterCount === wordLength) {
              res.push(arrWord);
               }
        }
      }
    }
    return res;
  }
  
  console.log(checkSublist('pencil', ['licnep', 'circular','pupil','nilcpe']));