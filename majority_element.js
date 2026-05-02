var majorityElement = function(nums) {
    let map = new Map();
    let maxnum = 0;
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }

        if (map.get(num) > maxnum) {
            maxnum = map.get(num);
            result = num;
        }
    }

    return result;
};

console.log("result", majorityElement([3, 2, 3]));
console.log("result", majorityElement([2, 2, 1, 1, 1, 2, 2]));  
console.log("result", majorityElement([1, 1, 1, 2, 2]));