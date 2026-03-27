//  export function isAnagrams(str1, str2) {
//    if(str1.length !== str2.length) return false;
//    const count={};
//    for(let char of str1){
//     count[char]=(count[char]||0)+1
//    }

//    for(let char of str2){
//     if(!count[char])return false;
//     count[char]--;
//    }
//    return true;
// }

var isAnagram = function(s, t) {
    if(s.length !==t.length)return false;
    const count={};
    for(let char of s){
        count[char]=(count[char]||0)+1;
    }
    for(let char of t){
        if(!count[char])return false;
        count[char]--;
    }
    return true
};

console.log(isAnagram("listen","silent"));
console.log(isAnagram("hello","olleh"));   
console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("rat","car"));
