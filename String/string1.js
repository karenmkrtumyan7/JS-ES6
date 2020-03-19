//Output the books sorted by the percent in descending order which readStatus is true.

function convertAcronym(str) {
    const regexp = /\b[A-z]+\b/gm;
    const wordsArr = str.match(regexp);

    return wordsArr.reduce((calc, current) => { return calc + current[0].toUpperCase() } , '')
}

console.log(convertAcronym('Have a good night'));

//Dav jan ete esi regexp petq cher grel comment ara metodnerov grem
