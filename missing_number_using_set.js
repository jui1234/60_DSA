var missingNumber = function(nums) {
    let seen =new Set(nums);

    for(let i=0;i<nums.length;i++) {   
        if(!seen.has(i)){
            return i;
        } 

    }
    return seen.size;
};

console.log("result",missingNumber([3,0,1]))    
console.log("result",missingNumber([0,1]))
console.log("result",missingNumber([9,6,4,2,3,5,7,0,1]))
console.log("result",missingNumber([0,1]))