var isAnagram =function(s,t){
    if(s.length !== t.length)return false;
    let map=new Map();

    for(let ch of s){
        map.set(ch,(map.get(ch)||0)+1);
    }

    for(let ch of t){
        if(!map.has(ch) || map.get(ch)===0)return false;
        map.set(ch,map.get(ch)-1);
    }
    return true;
}


var groupAnagrams = function(strs) {
   let result =[];
   let visited =new Set();
   
   for(let left=0;left<strs.length;left++){
    if(visited.has(left))continue;

    let group =[strs[left]];
    visited.add(left);
    for(let right=left+1;right<strs.length;right++){
        if(visited.has(right))continue;

        if(isAnagram(strs[left],strs[right])){
            group.push(strs[right]);
            visited.add(right);
        }
    }
    result.push(group);
   }
   return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))