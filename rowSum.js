var rowSum=function(grid){
    let result=[];
    for(let row=0;row<grid.length;row++){
    let sum=0;
    for(let col=0;col<grid[row].length;col++){
        sum+=grid[row][col];
    }
    result.push(sum);
    }
    return result;
}

console.log(rowSum([[1,2,3],[4,5,6],[7,8,9]])); 
console.log(rowSum([[1,1,1],[1,1,1],[1,1,1]]));