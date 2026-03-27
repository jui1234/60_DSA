var moveZeroes = function(nums) {
    const arrlength = nums.length;
    let count=0;
    for(let i=0;i<arrlength;i++){
        if(nums[i]!=0){
          nums[count]=nums[i];
          count++;
        }
    }
    for(let i=count;i<arrlength;i++){
         nums[i]=0;
    } 
    return nums;
    
};

console.log(moveZeroes([0,1,0,3,12]));