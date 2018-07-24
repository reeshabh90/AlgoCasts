function whatFlavors(cost, money) {
    const map = [];
    const indexnum = [];

    for (let x = 0; x < cost.length; x++) {
        if (map[cost[x]] != null) {
            let index = map[cost[x]];
            indexnum[0] = index + 1;
            indexnum[1] = x + 1;
            break;
        } else {
            map[money - cost[x]] = x;
        }
    }
    console.log(indexnum[0] + ' ' + indexnum[1])
}

cost = [2,1,3,5,6];
money = 5;
