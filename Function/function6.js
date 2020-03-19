// 6. Write a function which receives two strings and removes appearances of the second string from the first one.

function checkWordLengthInString(number, string, word) {
    var wordHelp = '';
    var wordLength = word.length;

    for (var j = number; j < wordLength + number; j++) {
        wordHelp += string[j]
    }
    return wordHelp;
}

function deleteWordInString(string, word) {
    var stringLength = string.length;
    var wordLength = word.length;
    var res = '';

    for (var i = 0; i < stringLength; i++) {
        var wordHelp = checkWordLengthInString(i, string, word) 
   
        if (wordHelp === word){
            i--;
            i = i + wordLength;
            continue;
        } else {
            res += string[i];
        }
    } 
    return res;
}
console.log(deleteWordInString('This is some text.' , 'is'));