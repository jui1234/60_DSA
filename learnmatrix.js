var matrixfun=function(grid){
    for(let row=0;row<grid.length;row++){
        
        for(let col=0;col<grid[row].length;col++){
            console.log(grid[row][col]);
        }
    }
}

console.log(matrixfun([[1,2,3],[4,5,6],[7,8,9]]));