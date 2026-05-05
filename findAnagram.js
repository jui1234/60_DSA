var findAnagrams = function(s, p) {
    let result = [];

    for (let left = 0; left <= s.length - p.length; left++) {

        let word = "";

        for (let right = left; right < left + p.length; right++) {
            word += s[right];
        }

        if (isAnagram(word, p)) {
            result.push(left);
        }
    }

    return result;
};


var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let map = new Map();

    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (let ch of t) {
        if (!map.has(ch) || map.get(ch) === 0) return false;
        map.set(ch, map.get(ch) - 1);
    }

    return true;
};


console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));