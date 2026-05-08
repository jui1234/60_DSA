var checkSubarraySum = function(nums, k) {
    let map=new Map();
     // handles cases where subarray starts from index 0
    map.set(0,-1);
    
    let prefixsum=0;
    
    for(let i=0;i<nums.length;i++){
      prefixsum+=nums[i];
      
      let reminder=prefixsum%k;
      
      if(map.has(reminder)){
        let prevIndex=map.get(reminder);
        
        if(i-prevIndex>=2){
          return true;
        }
      }
      else{
        map.set(reminder,i)
      }
    }
    return false;
};

console.log("result",checkSubarraySum([23,2,4,6,7],6))
console.log("result",checkSubarraySum([23,2,6,4,7],6))
console.log("result",checkSubarraySum([23,2,6,4,7],13)) 