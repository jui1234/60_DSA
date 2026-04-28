var intersection = function(nums1, nums2) {
    let set1=new Set(nums2)
    let seen=new Set();
    let result=[];

    for(let i=0;i<nums1.length;i++){
        if(set1.has(nums1[i]) && !seen.has(nums1[i])){
            result.push(nums1[i]);
            seen.add(nums1[i]);
        }
    }
    return result;
};

console.log(intersection([1,2,2,1],[2,2]))
console.log(intersection([4,9,5],[9,4,9,8,4]))