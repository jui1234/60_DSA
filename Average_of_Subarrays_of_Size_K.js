const Average_of_Subarrays_of_Size_K = function(nums, k) {
    let result=[];
    let windowSum=0;

    for(let i=0;i<k;i++){// first window
        windowSum+=nums[i];
    }

    result.push(windowSum/k);
    
    for(let i=k;i<nums.length;i++){
        windowSum+=nums[i];//new number added to the window
        windowSum-=nums[i-k];// old number removed from the window
        result.push(windowSum/k);
    }

    return result;
}

console.log(Average_of_Subarrays_of_Size_K([1, 3, 2, 6, -1, 4, 1, 8, 2],5));
console.log(Average_of_Subarrays_of_Size_K([1, 3, 2, 6, -1, 4, 1, 8, 2],3));