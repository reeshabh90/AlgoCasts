function candies(n, arr) {
    candiesArray = [];
    noOfCandies = 1;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            candiesArray.push(noOfCandies)
        } else if (arr[i] > arr[i - 1]) {
            noOfCandies += 1;
            candiesArray.push(noOfCandies);
        } else if (arr[i] <= arr[i - 1]) {
            noOfCandies = 1;
            if (arr[i + 1]) {
                if (arr[i + 1] < arr[i]) {
                    noOfCandies += 1;
                }
            }
            candiesArray.push(noOfCandies)
        }
    }
    return candiesArray.reduce((a, b) => a + b);

}

arr = [2, 4, 2, 6, 1, 7, 8, 9, 2, 1]
candies(10, arr)