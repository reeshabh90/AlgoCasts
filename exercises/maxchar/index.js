// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    chars = {}
    for (let char of str) {
        chars[char] = chars[char] + 1 || 1;
    }

    let arr = Object.values(chars)
    let max = Math.max(...arr)
    let res;
    for(let key in chars){
        if(chars[key] === max){
            res = key
        }
    }
    return res;
}

module.exports = maxChar;
