function findMaxSum(arr) {
    let incl = arr[0];
    let excl = 0;
    let excl_new;
    for (let i = 1; i < arr.length; i++) {
        // current max excluding i
        excl_new = (incl > excl) ? incl : excl;
        // current max including i
        incl = excl + arr[i];
        excl = excl_new;
    }

    /* return max of incl and excl */
    return ((incl > excl) ? incl : excl)
}

arr = [-2, 1, 3, -4, 5]
findMaxSum(arr)