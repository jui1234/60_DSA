var maxSlidingWindow = function(nums, k) {
    let result=[];
    for(let i=0;i<=nums.length-k;i++){
         let maxfinal=nums[i];

         for(let j=i+1;j<i+k;j++){
            maxfinal=Math.max(maxfinal,nums[j]);
         }
         result.push(maxfinal);
    }
    return result;

};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));
console.log(maxSlidingWindow([1],1));
console.log(maxSlidingWindow([1,-1],1));