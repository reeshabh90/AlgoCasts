// Complete the maxSubarray function below.
function maxSubarray(arr) {
    let subseqSum = 0;
    let subarrSum = 0;
    let result = [];

    subarrSum = findMaxSumSubArr(arr)
    subseqSum = findMaxSum(arr)

    result.push(subarrSum);
    result.push(subseqSum);

    return result;

}

function findMaxSum(arr) {
    let currentMaxSum;
    let globalMaxSum;

    currentMaxSum = globalMaxSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        currentMaxSum = Math.max(currentMaxSum, currentMaxSum + arr[i])
    }
    if (currentMaxSum > globalMaxSum) {
        globalMaxSum = currentMaxSum
    }

    return globalMaxSum;
}

function findMaxSumSubArr(arr) {
    let pivot = arr[0];
    let sum = pivot;
    for (let i = 1; i < arr.length; i++) {
        pivot = Math.max(arr[i], pivot + arr[i]);
        sum = Math.max(sum, pivot)
    }

    return sum
}