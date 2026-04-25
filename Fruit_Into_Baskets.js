var totalFruit = function(fruits) {
    let maxcount=0;
    

    for(let left=0;left<fruits.length;left++){
    let b1fruit=-Infinity;
    let b2fruit=-Infinity;
    let b1count=0;
    let b2count=0;
        for(let right=left;right<fruits.length;right++){
            if(b1fruit===fruits[right] || b1fruit === -Infinity ){
                b1fruit=fruits[right];
                b1count ++;
            }
            else if(b2fruit === fruits[right] || b2fruit === -Infinity ){
                b2fruit=fruits[right];
                b2count ++;
            }
            else{
                break;
            }

        }

        maxcount=Math.max(maxcount,b1count+b2count)
    }
    return maxcount;
}

console.log("result",totalFruit([1,2,1]))
console.log("result",totalFruit([0,1,2,2]))
console.log("result",totalFruit([1,2,3,2,2]))

var totalFruit2 = function(fruits) {
    let lastFruitType = -1;          // most recent fruit
    let secondLastFruitType = -1;    // previous fruit type

    let lastFruitStreak = 0;         // count of continuous last fruit
    let currentWindowLength = 0;     // current valid subarray size
    let maxWindowLength = 0;         // final answer

    for (let currentFruit of fruits) {

        // If current fruit fits in our 2 baskets → expand window
        if (currentFruit === lastFruitType || currentFruit === secondLastFruitType) {
            currentWindowLength++;
        } else {
            // 3rd fruit type → reset window using last streak
            currentWindowLength = lastFruitStreak + 1;
        }

        // Update streak of last fruit
        if (currentFruit === lastFruitType) {
            lastFruitStreak++;
        } else {
            lastFruitStreak = 1;
        }

        // Update fruit types (shift baskets)
        if (currentFruit !== lastFruitType) {
            secondLastFruitType = lastFruitType;
            lastFruitType = currentFruit;
        }

        // Update max length
        maxWindowLength = Math.max(maxWindowLength, currentWindowLength);
    }

    return maxWindowLength;
};