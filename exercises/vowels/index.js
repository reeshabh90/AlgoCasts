// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let arr = str.toLowerCase().split('');
    let vowelCount = 0;
    arr.map((char) => {
        if (isVowel(char)) {
            vowelCount++;
        }
    })
    return vowelCount;
}

function isVowel(char) {
    const vArr = ['a', 'e', 'i', 'o', 'u'];
    if (vArr.includes(char)) {
        return true;
    } else {
        return false
    }
}

module.exports = vowels;
