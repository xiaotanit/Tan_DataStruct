/** 反转二叉树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 第一种方式迭代
 * 执行用时 :72 ms, 在所有 JavaScript 提交中击败了87.29%的用户
 * 内存消耗 :33.8 M, 在所有 JavaScript 提交中击败了24.26%的用户
 */
var invertTree = function(root) {
    if (!root) return root;

    var arr = [root];

    while(arr.length){
        var current = arr.shift(); //取出节点，交换左右子节点
        var temp = current.right;
        current.right = current.left;
        current.left = temp;

        //将左右子节点push到数组中
        if (current.right) arr.push(current.right);
        if (current.left) arr.push(current.left);
    }
    return root;
};


/**
 * 第二种方式递归
 * @param root
 * @returns {*}
 * 执行用时 :64 ms, 在所有 JavaScript 提交中击败了98.02%的用户
 * 内存消耗 :33.6 MB, 在所有 JavaScript 提交中击败了53.85%的用户
 */
var invertTree2 = function(root) {
    if (!root) return root;

    var temp = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = temp;
    return root;
};