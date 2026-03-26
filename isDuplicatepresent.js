export function isDuplicatePresent(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=i+1;j<arr.length;j++){
            // console.log('Comparing: ',"arr[i]-",arr[i],"arr[j]-",arr[j]);
            if(arr[i]===arr[j]){
                // console.log("Duplicate found: "+arr[i],arr[j]);
                return true;
            }
        }
    }
    return false;
}

// console.log(isDuplicatePresent([1,2,3,4,5]));
// console.log(isDuplicatePresent([1,2,3,4,5,1])); 
// console.log(isDuplicatePresent([4,2,3,1,1]));
console.log(undefined||0)+1