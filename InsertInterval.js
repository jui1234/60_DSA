var insert = function(intervals, newInterval) {
    let i=0;
    let j=0;
    let result=[];

    //remaining intervals before newInterval
    while(i<intervals.length && intervals[i][1]<newInterval[0]){
        result.push(intervals[i]);
        i++;
    }

    //merge the overlap intervals with newInterval
    while(i<intervals.length && intervals[i][0]<=newInterval[1]){
        newInterval[0]=Math.min(newInterval[0],intervals[i][0]);
        newInterval[1]=Math.max(newInterval[1],intervals[i][1]);
        i++;
    }

    //push the merged interval
    result.push(newInterval);

    //remaining intervals after newInterval
    while(i<intervals.length){
        result.push(intervals[i]);
        i++;
     }

    return result;
};

console.log(insert([[1,3],[6,9]],[2,5]));
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]));
console.log(insert([[1,5]],[2,3]));