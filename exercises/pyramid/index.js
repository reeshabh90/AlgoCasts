// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, odd = 1) {
    let maxCol = 2*n - 1;
    if (n === row) {
        return
    }

    str = '';
    whiteSpaceNo = maxCol - odd;
    hashNo = odd;
    while(str.length < maxCol){
        for(let i =0; i< (whiteSpaceNo/2); i++){
            str = str + ' ';
        }
        for(let i = (whiteSpaceNo/2); i < (whiteSpaceNo/2 + odd); i++){
            str = str + '#';            
        }
        for(let i = (whiteSpaceNo/2 + odd); i < maxCol; i++){
            str = str + ' ';
        }        
    }
    console.log(str);
    pyramid(n, row + 1, odd + 2);
}

module.exports = pyramid;
