var totalFruit = function(fruits) {
    let maxcount=0;
    

    for(let left=0;left<fruits.length;left++){
    let b1fruit=-Infinity;
    let b2fruit=-Infinity;
    let b1count=0;
    let b2count=0;
        for(let right=left;right<fruits.length;right++){
            if(b1fruit===fruits[right] || b1fruit === -Infinity ){
                b1fruit=fruits[right];
                b1count ++;
            }
            else if(b2fruit === fruits[right] || b2fruit === -Infinity ){
                b2fruit=fruits[right];
                b2count ++;
            }
            else{
                break;
            }

        }

        maxcount=Math.max(maxcount,b1count+b2count)
    }
    return maxcount;
}

console.log("result",totalFruit([1,2,1]))
console.log("result",totalFruit([0,1,2,2]))
console.log("result",totalFruit([1,2,3,2,2]))