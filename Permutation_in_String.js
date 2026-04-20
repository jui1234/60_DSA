var checkInclusion = function(s1, s2) {
    if(s1.length >s2.length) return false;
    let seen =new Array(26).fill(0);

    for(let i=0;i<s1.length;i++){
        seen[s1.charCodeAt(i) - 97]++;
    }

    let left=0;
    for(let right=0;right<s2.length;right++){

        seen[s2.charCodeAt(right)-97]--;
        
        if(right-left+1>s1.length){// this we need to maintain the window size same as s1 length
            seen[s2.charCodeAt(left)-97]++;
            left++;
        }

        if(seen.every(count=>count===0)) return true;
    }
    return false;
};

console.log(checkInclusion("ab","eidbaooo"));
console.log(checkInclusion("ab","eidboaoo"));
console.log(checkInclusion("adc","dcda"));