var eraseOverlapIntervals = function(intervals) {
    let count=0;
     intervals.sort((a,b)=> a[0]-b[0]);
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0]<intervals[i-1][1]){
            count++;

            intervals[i][1]=Math.min(intervals[i][1],intervals[i-1][1]);
        }
    }
    return count;
};

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]));
console.log(eraseOverlapIntervals([[1,2],[2,3]]));