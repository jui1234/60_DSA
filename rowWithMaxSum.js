var rowWithMaxSum=function(matrix){
    let maxsum=0;
    let result=[];
    for(let row=0;row<matrix.length;row++){
        let sum=0;
        for(let col=0;col<matrix[row].length;col++){
            sum+=matrix[row][col];
        }

        if(sum>maxsum){
            maxsum=sum;
            result=matrix[row]
        }
        
    }
    return result;
}

console.log(rowWithMaxSum([[1,2,3],[4,5,6],[7,8,9]]));
console.log(rowWithMaxSum([[1,1,1],[1,1,1],[1,1,1]]));
console.log(rowWithMaxSum([[1,2],[3,4],[5,6]]));    