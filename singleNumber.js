var singleNumber = function(nums) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }
    
    let checkthenumber = [...map.entries()]
        .filter(([key, value]) => value === 1)
        .map(([key]) => key);
    
    console.log("checkthenumber", checkthenumber);
    return checkthenumber[0]; // since only one exists
};

console.log("result", singleNumber([2, 2, 1]));
console.log("result", singleNumber([4, 1, 2, 1, 2]));
console.log("result", singleNumber([1]));