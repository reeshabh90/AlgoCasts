function makeAnagram(stringA, stringB) {
    let arrA = stringA.split('')
    let arrB = stringB.split('')

    let steps = 0;

    for (let i = 0; i < arrA.length; i++) {
        if (arrB.includes(arrA[i])) {
            console.log(arrA[i])
            let indexB = arrB.indexOf(arrA[i]);
            let indexA = arrA.indexOf(arrA[i])
            if (indexB > -1) {
                arrB.splice(indexB, 1);
            }
            if (indexA > -1) {
                arrA.splice(indexA, 1);
            }
            i--;
        }
    }

    steps = arrA.length + arrB.length

    return steps

}

stringA = 'fcrxzwscanmligyxyvym'
stringB = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'

makeAnagram(stringA, stringB)
