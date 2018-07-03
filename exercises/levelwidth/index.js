// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let resultArray = [0];

    const traversalArray = [root, 's'];

    while (traversalArray.length > 1) {
        const node = traversalArray.shift();

        if (node === 's') {
            resultArray.push(0);
            traversalArray.push('s');
        } else {
            traversalArray.push(...node.children);
            resultArray[resultArray.length - 1]++;
        }
    }

    return resultArray;

}

module.exports = levelWidth;
