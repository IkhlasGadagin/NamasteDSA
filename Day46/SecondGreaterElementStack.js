/* Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1] */
//num2 has to be iteaate to find the second largest
//Start from the last end
//two condition current element is smaller that the next that it correct map it
//else that is the the current is smaller that the next
//for this keep pushing
//while loop for to find the second largest from the stack pop until to find

function SecondLargest(nums, arr) {
    //creat an object to map the perticular element to largest of second
    let map = {};
    //create stack
    let stack = [];
    //the last element's greater not exist  so map to -1
    let n = arr.length;
    stack.push(arr[n - 1]);

    //push last elment to stack
    map[arr[n - 1]] = -1;
    //loop starts from the last second element
    for (let i = n - 2; i >= 0; i--) {
        //if the currnt element is is smaller that the top of the stack means
        //map current to the top element in {}
        //if current element is smaller that the top
        //iterate until length and find the largest in the stack if found break
        //if not found map cur element to -1 
        //keep pushing the curret to the stack doesn' matter smaller 
        if (arr[i] < stack[stack.length - 1]) {
            map[arr[i]] = stack[stack.length - 1]
        }
        else {
            while (stack.length) {
                if (stack[stack.length - 1] < arr[i]) {
                    stack.pop()
                }
                else {
                    map[arr[i]] = stack[stack.length - 1];
                    break;
                }

            }
            if (stack.length === 0) {
                map[arr[i]] = -1;
            }
        }
        stack.push(arr[i])
    }

    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(map[nums[i]]);
    }
    return ans;
}
let arr1 = [4, 1, 2];
let arr2 = [1, 3, 4, 2];
let ans = SecondLargest(arr1, arr2);
console.log(ans);

