class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        if (this.root) {
            this._insert(this.root, val);
        } else {
            this.root = new TreeNode(val);
        }
    }

    _insert(root, val) {
        if (val < root.val) {
            if (root.left) {
                this._insert(root.left, val);
            } else {
                root.left = new TreeNode(val);
            }
        } else {
            if (root.right) {
                this._insert(root.right, val);
            } else {
                root.right = new TreeNode(val);
            }
        }
    }

    searchRecur(val, root = this.root) {
        if (!root) return false;

        if (val === root.val) return true;
        if (val < root.val) {
            if (root.left) {
                return this.searchRecur(val, root.left);
            } else {
                return false;
            }
        } else {
            if (root.right) {
                return this.searchRecur(val, root.right);
            } else {
                return false;
            }
        }
    }

    //                  10
    //              5       16
    //            1   7        16
    //

    searchIter(val) {
        // {val: 1, left: {val: right: left:} right: {val: right: left:}}
        if (this.root === null) return false;
        let current = this.root;
        if (current.val === val) return true;
        while (current.left || current.right) {
            if (val < current.val) {
                if (current.left) {
                    current = current.left;
                } else {
                    return false;
                }
            } else {
                if (current.right) {
                    current = current.right;
                } else {
                    return false;
                }
            }
            if (current.val === val) return true;
        }
        return false;
    }
}
tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(16);
tree.insert(1);
tree.insert(7);
tree.insert(16);
console.log(tree.searchIter(7));

module.exports = {
    TreeNode,
    BST,
};
