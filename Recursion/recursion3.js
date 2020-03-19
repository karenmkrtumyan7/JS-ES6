function isNumDigitsOdd (num) {
    if (num === undefined) return 'write number'
    let lastDigit = num % 10;

    if(lastDigit % 2 !== 0 && num !== 0) {
        return  isNumDigitsOdd(Math.floor(num / 10))
    } else if(num !== 0) return false; // ete else grei cher lini vorovhetev palyubomu es num verjum 0a darnalu arajin paymany chi bavarari kmtni ste u sxal kta

    return true;
}

console.log(isNumDigitsOdd (7791))
