//Given a word and a list of possible anagrams, select the correct sublist.

function searchAnagrams(word, arr) {
    const wordSort = word.split('').sort((a, b) => { return a > b ? 1 : -1 }).join('');
    const arrWordsSort =  arr.map((item) => item.split('').sort((a,b) =>{ return a > b ? 1 : -1 }).join(''));
    return arrWordsSort.reduce((calc, item, i) => {
                if (item === wordSort){
                   calc.push(arr[i]);
                   return calc; 
                } else {
                    return calc;
                }
            }, []);
}            

console.log(searchAnagrams('listen', ['enlists', 'google', 'inlets', 'banana']));
