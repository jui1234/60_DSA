var topKFrequent = function(nums, k) {
     let countmap=new Map();
     let maxcount=0;
   
   
     
     for(let i=0;i<nums.length;i++)
     {
       if(!countmap.has(nums[i])){
         countmap.set(nums[i],1)
       }
       else{
         countmap.set(nums[i], countmap.get(nums[i]) + 1);
       }
     }
     
       countmap = new Map(
       [...countmap.entries()].sort((a, b) => b[1] - a[1])
     );

     // Step 3: Take first k keys
     return result = [...countmap.keys()].slice(0, k);
   
 
};

console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))