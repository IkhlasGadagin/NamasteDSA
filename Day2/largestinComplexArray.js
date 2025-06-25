// // function findLargest(arr) {
// //     let largeNum = -Infinity;
// //     for (let i = 0; i < arr.length; i++) {
// //         for (let j = 0; j < arr[i].length; j++) {
// //             for (let k = 0; k < arr[j].length; k++) {
// //                 if (arr[i][j][k] > largeNum) {
// //                     largeNum = arr[i][j][k]
// //                 }

// //             }
// //         }

// //     }
// //     return largeNum;

// // }
// // const arr = [[[0, 5, 9, 11, 7], [9, 17, 21, 25], [18, 9]], [[[5, 27, 32, 69], [], [7, 60]]], [6]]

// // const ans = findLargest(arr)
// // console.log(ans);
// function findLargest(arr) {
//     let largeNum = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             for (let j = 0; j < arr[i].length; j++) {
//                 if (Array.isArray(arr[i][j])) {
//                     for (let k = 0; k < arr[i][j].length; k++) {
//                         if (arr[i][j][k] > largeNum) {
//                             largeNum = arr[i][j][k];
//                         }
//                     }
//                 } else if (typeof arr[i][j] === 'number') {
//                     // In case arr[i][j] is a number, not an array
//                     if (arr[i][j] > largeNum) {
//                         largeNum = arr[i][j];
//                     }
//                 }
//             }
//         } else if (typeof arr[i] === 'number') {
//             // In case arr[i] is a number, not an array
//             if (arr[i] > largeNum) {
//                 largeNum = arr[i];
//             }
//         }
//     }

//     return largeNum;
// }

// const arr = [
//     [[0, 5, 9, 11, 7], [9, 17, 21, 25], [18, 9]],
//     [[[5, 27, 32, 69], [], [7, 60]]],
//     [6]
// ];

// const ans = findLargest(arr);
// console.log(ans); // Output: 69
function findLargest(arr) {
    let largeNum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                if (Array.isArray(arr[i][j])) {
                    for (let k = 0; k < arr[i][j].length; k++) {
                        if (arr[i][j][k] > largeNum) {
                            largeNum = arr[i][j][k];
                        }
                    }
                } else if (typeof arr[i][j] === 'number') {
                    // In case arr[i][j] is a number, not an array
                    if (arr[i][j] > largeNum) {
                        largeNum = arr[i][j];
                    }
                }
            }
        } else if (typeof arr[i] === 'number') {
            // In case arr[i] is a number, not an array
            if (arr[i] > largeNum) {
                largeNum = arr[i];
            }
        }
    }

    return largeNum;
}

const arr = [
    [[0, 5, 9, 11, 7], [9, 17, 21, 25], [18, 9]],
    [[[5, 27, 32, 69], [], [7, 60]]],
    [6]
];

const ans = findLargest(arr);
console.log(ans); // Output: 69
