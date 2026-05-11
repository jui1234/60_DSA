var spiralOrder = function(matrix) {

    let rows = matrix.length;
    let cols = matrix[0].length;

    let visited = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    );

    let result = [];

    let directions = [
        [0, 1],   // right
        [1, 0],   // down
        [0, -1],  // left
        [-1, 0]   // up
    ];

    let row = 0;
    let col = 0;
    let dir = 0;

    for (let i = 0; i < rows * cols; i++) {

        result.push(matrix[row][col]);
        visited[row][col] = true;

        let newRow = row + directions[dir][0];
        let newCol = col + directions[dir][1];

        if (
            newRow < 0 ||
            newRow >= rows ||
            newCol < 0 ||
            newCol >= cols ||
            visited[newRow][newCol]
        ) {
            dir = (dir + 1) % 4;

            newRow = row + directions[dir][0];
            newCol = col + directions[dir][1];
        }

        row = newRow;
        col = newCol;
    }

    return result;
};

console.log("result",spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log("result",spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
console.log("result",spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))