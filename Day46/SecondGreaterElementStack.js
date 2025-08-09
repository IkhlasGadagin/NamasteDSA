/* Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1] */
//num2 has to be iteaate to find the second largest
//Start from the last end
//two condition current element is smaller that the next that it correct map it
//else that is the the current is smaller that the next
//for this keep pushing
//while loop for to find the second largest from the stack pop until to find

function SecondLargest(nums, arr) {
    let map = {};
    let stack = [];
    let lastElement = arr[arr.length - 1];

    map[lastElement] = -1;
    stack.push(lastElement);
    console.log(map, stack);


}
let arr1 = [4, 1, 2];
let arr2 = [4, 1, 2];
let ans = SecondLargest(arr1, arr2);
console.log(ans);

