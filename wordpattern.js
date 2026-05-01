var wordPattern = function(pattern, s) {
    let mymap = new Map();
    let seen = new Set();

    let word = s.split(" ");
    
    if (word.length !== pattern.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        let s1 = pattern[i];
        let s2 = word[i];

        if (!mymap.has(s1)) {
            if (seen.has(s2)) return false;

            mymap.set(s1, s2);
            seen.add(s2);
        } 
        else if (mymap.get(s1) !== s2) {
            return false;
        }
    }

    return true;
};
console.log("result",wordPattern("abba", "dog cat cat dog"))
console.log("result",wordPattern("abba", "dog cat cat fish"))
console.log("result",wordPattern("aaaa", "dog cat cat dog"))
console.log("result",wordPattern("abba", "dog dog dog dog"))