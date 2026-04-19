var characterReplacement = function(s, k) {
     let freq=new Array(26).fill(0);
     let left=0;
     let maxFrequ=0;
     let maxLength=0;

     for(let right=0;right<s.length;right++){
       let index=s.charCodeAt(right)-65;// A=65
        freq[index]++;


        maxFrequ=Math.max(maxFrequ,freq[index]);

    let windowSize=right-left+1;

    if(windowSize-maxFrequ>k){
        let leftIndex=s.charCodeAt(left)-65;
        freq[leftIndex]--;
        left++;
    }

    maxLength=Math.max(maxLength,right-left+1);
    }

    return maxLength;
};

console.log(characterReplacement("ABAB",2));
console.log(characterReplacement("AABABBA",1)); 
console.log(characterReplacement("AAAA",2));