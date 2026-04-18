var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    
    for(let i=0;i<s.length;i++){
        let seen = new Array(128).fill(false);
        for(let j=i;j<s.length;j++){
             let code =s.charAt(j);
             if(seen[code])break;
             seen[code]=true;

             maxLength=Math.max(maxLength,j-i+1);
        }
    }
    return maxLength;
    
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));    
