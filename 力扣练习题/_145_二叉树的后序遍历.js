/** 后序遍历规则：先叶子节点，叶子节点先左后右，再根节点
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** 后序遍历：先叶子节点，再左子树，再右子树
 * 第一种方式：递归
 * @param {TreeNode} root
 * @return {number[]}
 * 执行用时 :76 ms, 在所有 JavaScript 提交中击败了68.85%的用户
 * 内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了9.84%的用户
 */
var postorderTraversal = function(root) {
    var res = [];
    if (!root) return res;
    recusion(root);
    return res;

    function recusion(root){
        if (!root) return;

        recusion(root.left);
        recusion(root.right);
        res.push(root.val);
    }
};


/**
 * 第二种方式：迭代
 * @param root
 * @returns {Array}
 * 执行用时 :80 ms, 在所有 JavaScript 提交中击败了48.15%的用户
 * 内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败25.41%的用户
 */
var postorderTraversal = function(root) {
    var res = [];
    if (!root) return res;

    var arr = [root];
    while (arr.length){
        var current = arr.pop();
        res.unshift(current.val);

        if (current.left){
            arr.push(current.left);
        }
        if (current.right){
            arr.push(current.right);
        }
    }
    return res;
};