var findAnagrams = function(s, p) {
    let result = [];

    let pCount = new Array(26).fill(0);
    let sCount = new Array(26).fill(0);

    // fill pCount
    for (let ch of p) {
        pCount[ch.charCodeAt(0) - 97]++;
    }

    let left = 0;

    for (let right = 0; right < s.length; right++) {

        // add current char to window
        sCount[s.charCodeAt(right) - 97]++;

        // keep window size = p.length
        if (right - left + 1 > p.length) {
            sCount[s.charCodeAt(left) - 97]--;
            left++;
        }

        // compare both arrays
        if (arraysEqual(pCount, sCount)) {
            result.push(left);
        }
    }

    return result;
};

function arraysEqual(a, b) {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));    
console.log(findAnagrams("cbaebabacd", "abc"));