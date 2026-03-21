// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const arr= [3,2,4];
const target = 6;

export function ArrayWithTarget(arr,target){

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return [i,j];
            }
        }
    }
}

console.log(ArrayWithTarget(arr,target));

//Time Cpmplexity:
// “This is a nested loop where inner loop starts from i+1, forming a triangular pattern.
// Total operations are n(n-1)/2, so time complexity is O(n²).”