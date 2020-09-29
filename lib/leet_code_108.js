// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

var sortedArrayToBST = function (nums) {
    if (nums.length < 1) return null;

    let middleIdx = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[middleIdx]);
    let left = nums.slice(0, middleIdx);
    let right = nums.slice(middleIdx + 1);

    root.left = sortedArrayToBST(left);
    root.right = sortedArrayToBST(right);
    return root;
};
