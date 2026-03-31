export function Storearrayvaluecountandsumcount(arr){
      let storeresult={};
      let sum=0;
      let maxsum=-Infinity;
      for(let i=0;i<arr.length;i++){
        storeresult[i]={count:i+1,sum:sum+=arr[i]
        };
    }
    // return maxsum;
    return storeresult;
}

console.log(Storearrayvaluecountandsumcount([-2,1,-3,4,-1,2,1,-5,4]));
// console.log(Storearrayvaluecountandsumcount([1]));
// console.log(Storearrayvaluecountandsumcount([5,4,-1,7,8]));