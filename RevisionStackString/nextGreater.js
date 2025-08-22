/* ## ✅ Examples
**Input:**
nums1 = [4,1,2], 
nums2 = [1,3,4,2]

 [-1,3,-1] */

//Algorthmn
//the last elemnt push to stack
//the map to get for each
//map put last for the -1 always
//while loop take top map it 

function nextGreater(nums1, nums2) {
    let len = nums2.length;
    let lastelement = nums2[len - 1];
    let stack = [];
    stack.push(lastelement);
    let map = {};
    map[nums2[len - 1]] = -1;

    for (let i = len - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (nums2[i] > top) {
                stack.pop();
            }
            else {
                map[nums2[i]] = top;
                break;
            }
            if (stack.length === 0) {
                map[nums2[i]] = -1;

            }
        }
        stack.push(nums2[i])
    }
    console.log(map);
    let ans = [];
    for (let i = 0; i < nums1.length; i++) {
        ans.push(map[nums1[i]])
    }
    return ans;
}
const nums1 = [4, 1, 2, 3];
const nums2 = [1, 3, 4, 2];
const ans = nextGreater(nums1, nums2);
console.log(ans);
