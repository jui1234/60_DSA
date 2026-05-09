var diagonalTraverseReverse = function(mat) {
    let result=[];

    for(let i=mat.length-1;i>=0;i--){
        result.push(mat[i][i]);
    }
    return result;
}

console.log(diagonalTraverseReverse([[1,2,3],[4,5,6],[7,8,9]]));
console.log(diagonalTraverseReverse([[1,2],[3,4]]));
console.log(diagonalTraverseReverse([[1]]));