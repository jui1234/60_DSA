var findMaxLength = function(nums) {
    nums=nums.map(value=>value ===0 ? -1:value);
    
    let sum=0;
   
    let maxsum=0;
    let map=new Map();
    map.set(0, -1);
    
    for(let i=0;i<nums.length;i++){
       let result=0;
      sum+=nums[i];
      if(map.has(sum)){
        result=i-map.get(sum)
         
            maxsum=Math.max(maxsum,result)
          
        
      }
    else{
      map.set(sum,i);
    }
    }
    return maxsum;
};
console.log(findMaxLength([0,1]))
console.log(findMaxLength([0,1,0]))
console.log(findMaxLength([0,1,1,0,1,1,1,0]))