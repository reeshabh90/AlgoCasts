// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
   let arrA = stringA.split('').sort().join('');
   let arrB = stringB.split('').sort().join('');

   return arrA === arrB
    // if(arrA.length === arrB.length){
    //     for(let i =0; i< arrA.length; i++ ){
    //         if(arrA[i] !== arrB[i]){
    //             return false;
    //         }            
    //     }
    //     return true;
    // } else{
    //     return false;
    // }
}


// function anagrams(stringA, stringB) {
//     charsA = {}

//     for (let char of stringA) {
//         charsA[char] = charsA[char] + 1 || 1
//     }

//     charsB = {}

//     for (let char of stringB) {
//         charsB[char] = charsB[char] + 1 || 1
//     }

//     if (Object.keys(charsA).length === Object.keys(charsB).length) {
//         for (let key in charsA) {
//             if (charsA[key] !== charsB[key]) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     else {
//         return false;
//     }

// }
module.exports = anagrams;
