// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

var sortedArrayToBST = function (nums) {
    if (nums.length < 1) return null;

    const middleIdx = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[middleIdx]);
    const left = nums.slice(0, middleIdx);
    const right = nums.slice(middleIdx + 1);

    root.left = sortedArrayToBST(left);
    root.right = sortedArrayToBST(right);
    return root;
};
