// 5. Write a function, which receives a string, finds possible largest numbers in the string and returns their sum.

function calcNumSum(str){
    var length = str.length;
    var current = '';
    var res = 0;
    
    for (var i = 0; i < length + 1; i++) { 
      if (str[i] >= 1 || str[i] <= 9 || str[i] === '-') {
        current += str[i];
        continue;
      } 
        if (current !== '') {
        res += +current;
      }
      current = ''; 
    }
    return res;
  }
  
  console.log(calcNumSum('Wert12lop-12'));