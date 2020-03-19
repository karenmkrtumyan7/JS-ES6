//Given the list of the following readers: Output the books sorted by the percent in descending order which readStatus is true.

function readBookPercents(arr) {
    if(!Array.isArray(arr)) return 'write arr';
    
    return arr.filter((object) => object.readStatus).sort((a, b) => b.percent - a.percent);
}

console.log(readBookPercents([
    { book: 'Catcher in the Rye', readStatus: true, percent: 40},
    { book: 'Animal Farm', readStatus: true, percent: 20},
    { book: 'Solaris', readStatus: false, percent: 90 },
    { book: 'The Fall', readStatus: true, percent: 50 },
    { book: 'White Nights', readStatus: false, percent: 60 } ,
    { book: 'After Dark', readStatus: true, percent: 70 }
]))
