var checkSubarraySum = function(nums, k) {
    let map=new Map();
  
    
    for(let left=0;left<nums.length;left++){
      let store=nums[left];
    for(let right=left+1;right<nums.length;right++){
      
      store+=nums[right];
         if(store % k === 0){
                return true;
            }
      
      
    }
    }
    return false;
};

console.log("result",checkSubarraySum([23,2,4,6,7],6))
console.log("result",checkSubarraySum([23,2,6,4,7],6))
console.log("result",checkSubarraySum([23,2,6,4,7],13))