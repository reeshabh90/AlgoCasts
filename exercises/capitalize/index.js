// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let arr = str.split(' ');
    let resArr = arr.map(item => {
        let temp = item.split('');
        temp[0] = temp[0].toUpperCase();
        return temp.join('')
    });
    let res = resArr.join(' ')
    return res;
}

module.exports = capitalize;
