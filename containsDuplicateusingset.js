var containsDuplicate = function(nums) {
    const myset =new Set(nums);
    if(myset.size<nums.length){
        return true;
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
