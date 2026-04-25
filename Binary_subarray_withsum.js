var atMost = function(nums, goal) {
    let sum=0;
    let count=0;
    let left=0;
    if (goal<0) return 0;

    for(let right=0;right<nums.length;right++){
      sum+=nums[right];

      while(sum>goal){
        sum-=nums[left];
        left++;
      }

      count+=(right-left+1);

    }

    return count;
};

var numSubarraysWithSum = function(nums, goal) {
    return atMost(nums, goal) - atMost(nums, goal - 1);
};

console.log(numSubarraysWithSum([1,0,1,0,1],2))
console.log(numSubarraysWithSum([0,0,0,0,0],0))