var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    let myset = new Set(nums)
    let count=1;
    let maxcount=1;
    
    let sortset=[...myset].sort((a,b)=>a-b);
    
    for(let i=0;i<sortset.length;i++){
     if(sortset[i]+1 === sortset[i+1]){
       count ++
     }
     else{
       maxcount=Math.max(maxcount,count);
       count =1;
     }
    }
    return Math.max(maxcount,count);
}
console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))  
console.log(longestConsecutive([1,2,0,1]))
console.log(longestConsecutive([]))