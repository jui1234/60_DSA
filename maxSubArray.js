var maxSubArray = function(nums) {
    let currentsum=0;
    let maxsum=-Infinity;

    for(let i=0;i<nums.length;i++){
        currentsum+=nums[i];
        if(maxsum<currentsum){
            maxsum=currentsum;
        }

        if(currentsum<0){
            currentsum=0;
        }

    }

    return maxsum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));