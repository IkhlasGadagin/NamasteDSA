/* The rotten orange problem is that the grid 
if matrix m*n  each row has the 3 elements 
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.


The queue is used beacuse the first process of rottling is first which started first

Since the 2d Array 
The time taken for the to rotten
Mark the the rotten indexes push to the queue

the wile for the queue swift the element and mark rottle
the marked index is push back to queue 

To count the Minute push the zero initially with the queue
each iterate increase and push to quque
take the amax and return that is the minute
*/
function RottenOrange(oran) {
    //traverse and take the indices
    let queue = [];
    let m = oran.length;
    let n = oran[0].length;
    for (let i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (oran[i][j] === 2) {
                queue.push([i, j, 0])
            }
        }
    }

    let maxMin = 0;
    while (queue.length) {
        let [x, y, min] = queue.shift();
        //left
        if (x > 0 && oran[x - 1][y] === 1) {
            oran[x - 1][y] = 2;
            queue.push([x - 1, y, min + 1])
        }
        //right
        if (x < m - 1 && oran[x + 1][y] === 1) {
            oran[x + 1][y] = 2;
            queue.push([x + 1, y, min + 1])
        }
        //botton
        if (y > 0 && oran[x][y - 1] === 1) {
            oran[x][y - 1] = 2;
            queue.push([x, y - 1, min + 1])
        }
        //top
        if (y < n && oran[x][y + 1] === 1) {
            oran[x][y + 1] = 2;
            queue.push([x, y + 1, min + 1])
        }
        maxMin = Math.max(min, maxMin);

    }
    for (let i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (oran[i][j] === 1) {
                return -1
            }
        }
    }
    //make the rotten to the adjecent
    //fill for all -1 to 2
    return maxMin;
}
const orange = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
// const orange = [[1, 2, 1], [1, 0, 1], [1, 2, 0]];
const ans = RottenOrange(orange);
console.log(ans);
