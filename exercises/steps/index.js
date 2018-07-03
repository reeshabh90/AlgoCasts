// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(printHash(i)+printSpcae(n-i))
//     }
// }

// function printHash(n) {
//     let str = ''
//     for (let i = 0; i < n; i++) {
//         str =  '#' + str;
//     }
//     return str;
// }

// function printSpcae(n) {
//     let str = ''
//     for (let i = 0; i < n; i++) {
//         str = ' ' + str;
//     }
//     return str;
// }

function steps(n, row = 0) {
    if (n === row) {
        return
    }

    str = '';
    while (str.length < n) {
        if (str.length <= row) {
            str = str + '#';
        } else {
            str = str + ' ';
        }
    }
    console.log(str);
    steps(n, row + 1);
}
module.exports = steps;
