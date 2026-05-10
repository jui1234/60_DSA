var spiralOrder = function(matrix) {
    
    let result = [];

    let top = 0;
    let bottom = matrix.length - 1;

    let left = 0;
    let right = matrix[0].length - 1;
    
    console.log("right",right)

    while (top <= bottom && left <= right) {

        // left -> right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // top -> bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // right -> left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // bottom -> top
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
};



console.log("result",spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log("result",spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))