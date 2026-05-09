var colSum = function(grid) {
    let result = [];
    for(let col=0;col<grid[0].length;col++){//grid[0].length is used to get the number of columns in the grid  of the colums [0][1][2]
        let sum=0;
        for(let row=0;row<grid.length;row++){
            sum+=grid[row][col];
        }
        result.push(sum);
    }
    return result;
}

console.log(colSum([[1,2,3],[4,5,6],[7,8,9]]));
console.log(colSum([[1,1,1],[1,1,1],[1,1,1]])); 
console.log(colSum([[1,2],[3,4],[5,6]]));