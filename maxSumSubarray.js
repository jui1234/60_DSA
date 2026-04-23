const maxSumSubarray = function(nums, k) {
    let maxsum=0;
    let windowsum=0;

    for(let i=0;i<k;i++){
        windowsum+=nums[i];//1st windown
    }
    
    maxsum=windowsum;
    
    for(let i=k;i<nums.length;i++){
        windowsum+=nums[i];//added the new in window
        windowsum-=nums[i-k];//removed the old from window
        maxsum=Math.max(maxsum,windowsum);
    }

    return maxsum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2],3));
console.log(maxSumSubarray([2, 3, 4, 1, 5],2));
console.log(maxSumSubarray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0],3));