var diagonalTraverse =function(grid){
    let result=[];

    for(let i=0;i<grid.length;i++){
        result.push(grid[i][i]);
    }
    return result;
}

console.log(diagonalTraverse([[1,2,3],[4,5,6],[7,8,9]]));
console.log(diagonalTraverse([[1,2],[3,4]]));
console.log(diagonalTraverse([[1]]));
