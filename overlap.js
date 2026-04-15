var merge = function(intervals) {
    intervals.sort((a,b)=> a[0] - b[0]);
    const result=[];
    let current=intervals[0];

    for(let i=1;i<intervals.length;i++){
     let next=intervals[i];
     if(next[0]<=current[1]){
        current[1]=Math.max(current[1],next[1]);
     }
     else{
        result.push(current);
        current=next;
     }
    }
     result.push(current);
     return result;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));