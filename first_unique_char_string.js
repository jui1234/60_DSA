var firstUniqChar = function(s) {
    let map =new Map();
    let result;
    
    for(let ch of s){
      if(!map.has(ch)){
        map.set(ch,1);
        // result===ch;
      }
      else{
        
      map.set(ch,map.get(ch)+1);
      }
    }

for(let i=0;i<s.length;i++){
 if (map.get(s[i]) === 1) return i;
}
    
  return -1;
};


console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqChar("aabb"))